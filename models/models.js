var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
	userId: { type: Number },
	name: { type: String },
	email: { type: String },
	company: { type: String },
	created_at: { type: Date, default: Date.now }
});

var user = mongoose.model("user", User);

module.exports = user;