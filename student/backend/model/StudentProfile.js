const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    proficiency: {
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
    referenceName: {
        type: String,
        required: true
    },
    referenceContactType: {
        type: String,
        required: true
    },
    referenceEmail: {
        type: String,
    },
    referencePhone: {
        type: String,
    },
    skills: {
        type: [skillSchema],
        required: true
    },
    resume: {
        type: {
            data: Buffer,
            contentType: String,
            filename: String
        },
        required: true
    },
    letterOfRec: {
        type: {
            data: Buffer,
            contentType: String,
            filename: String
        }
    }
});

module.exports = mongoose.model('StudentProfile', studentsProfile);