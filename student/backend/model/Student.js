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
    id: {
        type: String,
        required: true
    },
   email: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    },
    firstTime: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('Student', studentsSchema);