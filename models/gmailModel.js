const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    user_email: String,
    source: String,
    id: String,
    snippet: String,
    to: String,
    from: String,
    created_at: Date,
    body: String
});

// Create user model
const events = mongoose.model('events', userSchema);

module.exports = events;
