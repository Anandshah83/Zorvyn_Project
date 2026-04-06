const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin','analyst','viewer'],
        default: 'viewer'
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('User', userSchema);