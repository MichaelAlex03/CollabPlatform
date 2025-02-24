const express = require('express');
const router = express.Router(); //Allows for route handling
const loginController = require('../../controller/auth/loginController');

router.route('/')
    .post(loginController.handleLogin);

module.exports = router;