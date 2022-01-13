const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
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

const Events = mongoose.model('Event', eventSchema);
module.exports = Events;