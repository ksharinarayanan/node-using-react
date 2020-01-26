const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String, 
		required: true,
		minlength: 1
	},
}, {
	timestamps: true,
});

const User = mongoose.model('Users', userSchema);
module.exports = User; 