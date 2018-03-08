var mongoose = require('mongoose');
console.log('pronlem');
mongoose.connect("mongodb://localhost/nodeblog");
console.log('pronlem');
var db = mongoose.connection;

var Schema = mongoose.Schema;

var postSchema = new Schema({
	postTitle : String,
	postCategory : String,
	postBody : String,
	// mainImageName : String,
	postAuthor : String
});

var postModel = mongoose.model('posts',postSchema);

var categorySchema = new Schema({
	category : String 
});

var categoryModel = mongoose.model('categories',categorySchema);

var commentSchema = new Schema({
	id: String,
	commentatorName: String,
	commentatorEmail: String,
	commentatorComment: String
});

var commentModel = mongoose.model('comments',commentSchema);

module.exports = {
	addPost,
	addCategory,
	getPosts,
	getAddPostCategories,
	getPostsByCategory,
	getsinglePost,
	postComment
};

function addPost(obj) {
	var postObj = new postModel(obj);
	console.log("ert    ",obj,"    ",postObj);
	postObj.save();
}

function addCategory(string) {
	var categoryObj = new categoryModel({category : string });
	console.log("ert1    ",categoryObj);
	categoryObj.save();
}

function getPosts(template,res) {
	postModel.find({},function(err,result){
		console.log("asd  ",result);
		res.marko(template,{filename : './home.marko', title: 'home' ,posts : result});
	});
}

function getPostsByCategory(template,res,category) {
	postModel.find({"postCategory": category},function(err,result){
		console.log("asd category ",result);
		res.marko(template,{filename : './home.marko', title: 'home' ,posts : result});
	});
}


function getAddPostCategories(template,res) {
	var returnObject; 
	categoryModel.find({},function(err,result){
		console.log("asd1  ",result);
		res.marko(template,{filename : './addPost.marko', title: 'add post',categories: result });
	});
}

//new
function getsinglePost(template,res,id) {
	console.log("asd single post 1");
	postModel.findOne({"_id":id},function(err,result){
		console.log("asd singe post ",result);
		commentModel.find({"id":id},function(err,resultComment){
			console.log("asd singe post comment ",resultComment);
			result.postComment = resultComment;
			res.marko(template,{filename : './singlePost.marko', title: 'home' ,posts : result});
		});
		
	});
}

//new
function postComment(commentObject,id){
	console.log("in post comment");
	var commentObjectDB = new commentModel(commentObject);
	commentObjectDB.save();
};



