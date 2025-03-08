const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { _id: false }); 

const studentsProfile = new Schema({
    aNum: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    expectedGrad: {
        type: String,
    },
    year: {
        type: String,
        required: true
    },
    degree: {
        type: String,
    },
    degreeCompleted: {
        type: String,
    },
    department: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    },
    workedHrs: {
        type: Number,
        required: true
    },
    projects: {
        type: String,
        required: true
    },
    jobs: {
        type: String,
        required: true
    },
    links: {
        type: [String],
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    skills: {
        type: [skillSchema],
        required: true
    }
});

module.exports = mongoose.model('StudentProfile', studentsProfile);