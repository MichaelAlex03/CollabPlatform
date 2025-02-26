const express = require('express');
const router = express.Router();
const studentController = require('../../controller/api/studentController');

router.route('/')
    .post(studentController.handleAddFormData);

module.exports = router