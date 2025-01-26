const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Student = require('../../model/Student')

const handleLogin = async (req, res) => {
    const { netId, pass } = req.body;
    if (!netId || !pass) return res.status(400).json({ message: 'netId and password required' });

    const foundStudent = await Student.findOne({ netId }).exec();
    if (!foundStudent) return res.sendStatus(401);

    //Compares the hashed value of the given password to the password in the DB that is already hashed
    const match = await bcrypt.compare(pass, foundStudent.password);
    if(match){
        //create JWT tokens
        const accessToken = jwt.sign(
            {username: foundStudent.username},
            
        )
    }else{
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };