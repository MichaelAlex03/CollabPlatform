const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Faculty = require('../../model/Faculty');

const handleLogin = async (req, res) => {
    const { user, pass } = req.body
    if (!user || !pass) return res.status(400).json({ message: 'username and password required' });

    foundFaculty = await Faculty.findOne({ username: user }).exec();
    if (!foundFaculty) return res.sendStatus(401);

    const match = await bcrypt.compare(pass, foundFaculty.password);
    if (match) {

        const accessToken = jwt.sign(
            { 'username': user },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        )

        const refreshToken = jwt.sign(
            { 'username': user },
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