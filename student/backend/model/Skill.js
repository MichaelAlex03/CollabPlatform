const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    neural_networks: {
        type: Boolean,
        required: true
    },
    LLM: {
        type: Boolean,
        required: true
    },
    data_analysis: {
        type: Boolean,
        required: true
    },
    MERN: {
        type: Boolean,
        required: true
    },
    web_designer: {
        type: Boolean,
        required: true
    },
    jira: {
        type: Boolean,
        required: true
    },
    cplus: {
        type: Boolean,
        required: true
    },
    java: {
        type: Boolean,
        required: true
    },
    python: {
        type: Boolean,
        required: true
    },
    sql: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Skill', skillsSchema);