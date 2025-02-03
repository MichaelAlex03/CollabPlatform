const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    netId: {
        type: String,
        required: true
    },
   email: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    }
});

module.exports = mongoose.model('Student', studentsSchema);