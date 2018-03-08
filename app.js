var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var multer = require('multer');
require('marko/node-require');
var engines = require('consolidate');



var app = express();
app.engine('marko', engines.marko);
var markoExpress = require('marko/express');
app.use(markoExpress()); 
//making mongodb accessible from every route
var mongoose = require('mongoose');
mongoose.connect("mongodb://adarsh anand:1234@ds161148.mlab.com:61148/nodeblog");
var db = mongoose.connection;

app.use('/',function(req, res, next) {
	req.db = db;
	next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var upload = multer({dest: './uploads'});
app.use('/',function(req,res,next){
   res.locals.edc = "edcchecklocals";
   next();
}) 
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.jade');
});

module.exports = app;
