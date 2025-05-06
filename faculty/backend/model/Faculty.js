const mongoose = require('mongoose');
const Schema = mongoose.Schema

const facultySchema = new Schema({
    facultyId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
   password: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firstTime: {
        type: Boolean,
        required: true
    },
    refreshToken: String
})

module.exports = mongoose.model('Faculty', facultySchema);