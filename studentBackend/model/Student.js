const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    username: {
        type: String,
        required
    },
    password: {
        type: String,
        required
    },
    netId: {
        type: String,
        required
    },
   email: {
        type: String,
        required
    },
    refreshToken: {
        type: String,
    }
});

module.exports = mongoose.model('Student', studentsSchema);