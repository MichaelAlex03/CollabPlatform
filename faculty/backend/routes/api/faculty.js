const express = require('express');
const router = express.Router();
const facultyController = require('../../controller/api/facultyController')

router.route('/')
    .post(facultyController.handleAddProject)

module.exports = router