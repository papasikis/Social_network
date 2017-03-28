var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/social_network");
var Schema = mongoose.Schema;

var userSchema = new Schema({
	login: String,
	password: String,
	name: String
});

module.exports = mongoose.model('User', userSchema);