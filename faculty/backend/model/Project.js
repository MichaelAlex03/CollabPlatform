const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    facultyId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    technicalSkills: {
        type: [String],
        required: true
    },
    nonTechnicalSkills: {
        type: [String],
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    milestones: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Project', projectsSchema);