const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Student = require('../../model/Student')

const handleLogin = async (req, res) => {
    const { email, pass } = req.body;

    //If email or password field on client side not filled out return an error
    if (!email || !pass) return res.sendStatus(400);

    //Checks to see if the email entered in matches one in the DB
    const foundStudent = await Student.findOne({ email }).exec();
    if (!foundStudent) return res.sendStatus(401);

    //Compares the hashed value of the given password to the password in the DB that is already hashed
    const match = await bcrypt.compare(pass, foundStudent.password);
    if (match) {
        //create JWT tokens
        const accessToken = jwt.sign(
            { email: foundStudent.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );

        const refreshToken = jwt.sign(
            { email: foundStudent.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        foundStudent.refreshToken = refreshToken
        await foundStudent.save()

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ aNum: foundStudent.id, accessToken, firstTime: foundStudent.firstTime });


    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };