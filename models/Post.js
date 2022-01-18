const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
	imageUrl: String,
	title: String,
	date: String,
	time: String,
	category: String,
	description: String,
	owner:String,
    
}, {
	timestamps: true,
});

const Posts = mongoose.model('Post', postSchema);
module.exports = Posts;