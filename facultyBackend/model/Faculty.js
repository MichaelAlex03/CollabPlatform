const mongoose = require('mongoose');
const Schema = mongoose.Schema

const facultySchema = new Schema({
    facultyId: {
        type: Number,
        required: true,
    }
})