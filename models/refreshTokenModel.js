const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    user_gmail: String,
    refresh_token: String
});

// Create user model
const refreshToken = mongoose.model('refreshToken', userSchema);

module.exports = refreshToken;