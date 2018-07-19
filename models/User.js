const mongoose = require('mongoose');
const { Schema } = mongoose;	// const Schema = mongoose.Schema

const userSchema = new Schema({
	googleID: String
});

// Create a new collection users
mongoose.model('users', userSchema);