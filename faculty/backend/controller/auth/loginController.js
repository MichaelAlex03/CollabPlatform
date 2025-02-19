const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Faculty = require('../../model/Faculty');

const handleLogin = async (req, res) => {
    const { email, pass } = req.body
    if (!email || !pass) return res.sendStatus(400);

    foundFaculty = await Faculty.findOne({ email: email }).exec();
    if (!foundFaculty) return res.sendStatus(401);

    const match = await bcrypt.compare(pass, foundFaculty.password);
    if (match) {

        const accessToken = jwt.sign(
            { 'username': email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        )

        const refreshToken = jwt.sign(
            { 'username': email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        foundFaculty.refreshToken = refreshToken;
        await foundFaculty.save();

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ accessToken });

    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };