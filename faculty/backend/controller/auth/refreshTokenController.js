const Faculty = require('../../model/Faculty');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {

    const cookie = req.cookies;
    
    //Send a 401 since there is no refresh token which means faculty is not logged in(Unauthorized)
    if (!cookie?.jwt) {
        return res.sendStatus(401);
    }

    const refreshToken = cookie.jwt;
    const faculty = await Faculty.findOne({ refreshToken }).exec();

    if (!faculty) {
        res.sendStatus(403)
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        /* If error objects exists that means there was error verifying token. Also email of token payload must match
        the email of the faculty that the refresh token belongs to */
        if (err || faculty.email !== decoded.email) {
            return res.sendStatus(403);
        };

        //If valid token then create new one and send back the id, firstTime and token
        const accessToken = jwt.sign({ 'email': faculty.email }, process.env.REFRESH_TOKEN_SECRET, {'expiresIn': '1d'});
        return res.status(200).json({
            id: faculty.facultyId,
            firstTime: faculty.firstTime,
            accessToken
        })
    });

}

module.exports = { handleRefreshToken }