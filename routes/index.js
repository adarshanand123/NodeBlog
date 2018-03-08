var express = require('express');
var router = express.Router();
var checkExpressValidator = require('express-validator/check');
var {check,validationResult} = checkExpressValidator;
require('marko/node-require');
var template = require('../views/index.marko');

var databaseI = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  databaseI.getPosts(template,res);
});

router.get('/show/category/:category', function(req, res, next) {
  databaseI.getPostsByCategory(template,res,req.params.category);
});

//new
router.get('/show/single/:id', function(req, res, next) {
		console.log("asd single post 0");
  databaseI.getsinglePost(template,res,req.params.id);
});

router.get('/add/post', function(req, res, next) {
  databaseI.getAddPostCategories(template,res);

});

router.get('/add/category', function(req, res, next) {
  template.render({filename : './addCategory.marko' ,title: 'add category'},res);
});

router.post('/add/post', function(req, res ,next) {
	var tempObj = {};
	tempObj.postTitle = req.body.postTitle;
	tempObj.postCategory = req.body.postCategory;
	tempObj.postBody = req.body.postBody;
	// tempObj.mainImage = req.body.mainImage;
	tempObj.postAuthor = req.body.postAuthor;
	databaseI.addPost(tempObj);
	res.redirect('/');
});

//new
router.post('/post/comment/:id', function(req, res ,next) {
	var commentObject = {};
	commentObject.id = req.params.id;
	commentObject.commentatorName = req.body.commentatorName;
	commentObject.commentatorEmail = req.body.commentatorEmail;
	commentObject.commentatorComment = req.body.commentatorComment;
	databaseI.postComment(commentObject,req.params.id);
	res.redirect(`/show/single/${req.params.id}`);
});

router.post('/add/category', function(req, res ,next) {
	databaseI.addCategory(req.body.addCategory);
	res.redirect('/');
});

module.exports = router;
