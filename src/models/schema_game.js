const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
	title : String,
	content : String,
	author : String,
	date : { type: Date, default : Date.now }
});

module.exports = mongoose.model('Game', Game);