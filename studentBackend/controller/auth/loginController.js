const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const {user, pass} = req.body;
    if (!user || !pass) return res.status(400).json({message: 'username and password are required'});
}

module.exports = handleLogin;