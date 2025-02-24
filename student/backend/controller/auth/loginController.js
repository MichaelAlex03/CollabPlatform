const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Student = require('../../model/Student')

const handleLogin = async (req, res) => {
    const { id, pass } = req.body;
    if (!id || !pass) return res.status(400).json({ message: 'netId and password required' });

    const foundStudent = await Student.findOne({ id }).exec();
    if (!foundStudent) return res.sendStatus(401);

    //Compares the hashed value of the given password to the password in the DB that is already hashed
    const match = await bcrypt.compare(pass, foundStudent.password);
    if (match) {
        //create JWT tokens
        const accessToken = jwt.sign(
            { username: foundStudent.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );

        const refreshToken = jwt.sign(
            { username: foundStudent.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        foundStudent.refreshToken = refreshToken
        await foundStudent.save()

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ accessToken });


    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };