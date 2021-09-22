const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema ({
	username: String,
	email: String,
	password: String


})

const profile = mongoose.model('profile', userSchema)