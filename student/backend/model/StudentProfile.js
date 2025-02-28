const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
},{ _id: false });

const studentsProfile = new Schema({
    skills: {
        type: [skillSchema],
        required: true
    }
});

module.exports = mongoose.model('StudentProfile', studentsProfile);