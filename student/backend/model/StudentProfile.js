const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsProfile = new Schema({
    skills: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('StudentProfile', studentsProfile);