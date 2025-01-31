const mongoose = require('mongoose');
const Schema = mongoose.Schema

const facultySchema = new Schema({
    facultyId: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
   password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    refreshToken: String
})

module.exports = mongoose.model('Faculty', facultySchema);