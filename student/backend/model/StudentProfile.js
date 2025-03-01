const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        validate: {
            validator: function(value) {
                const undergradYears = ['freshman', 'sophomore', 'junior', 'senior'];
                if (undergradYears.includes(this.year)) {
                    return value != null;
                }
                return true;
            }
        }
    },
    year: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        validate: {
            validator: function(value) {
                const undergradYears = ['freshman', 'sophomore', 'junior', 'senior'];
                if (undergradYears.includes(this.year)) {
                    return value != null;
                }
                return true;
            }
        }
    },
    degreeCompleted: {
        type: String,
        validate: {
            validator: function(value) {
                if (this.year === 'graduate') {
                    return value != null;
                }
                return true;
            }
        }
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
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('StudentProfile', studentsProfile);