const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({

});

module.exports = mongoose.model('Project', projectsSchema);