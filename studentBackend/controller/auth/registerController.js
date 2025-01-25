const bcrypt = require('bcrypt');
const Student = require('../../model/Student');

const handleNewStudent = async () => {
    const {user, pass, netId, email} = req.body;
    if (!user || !pass || !netId || !email) return res.status(400).json({message: 'missing fields'});

    
}

module.exports = {
    handleNewStudent
};