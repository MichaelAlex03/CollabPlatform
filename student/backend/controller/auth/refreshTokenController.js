const Student = require('../../model/Student');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {

    const cookies = req.cookies;
    // Check if there is a property of the cookie called jwt
    if (!cookies?.jwt) {
        return res.sendStatus(401)
    }

    //Checks if the refresh token matches a students refresh token in the db if not return a 403 (Unauthorized)
    const refreshToken = cookies.jwt;
    const user = await User.findOne({ refreshToken }).exec();

    if (!user) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        //checks if the user found with the refreshToken matches the user in the payload of the JWT token
        if (err || user.username !== decoded.username) {
            return res.status(403);
        }

        //If refresh token is valid create a new access token and send it back to the front end
        const accessToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })
        return res.status(200).json(
            {
                username: user.username,
                accessToken
            }
        );
    });


}

//returns object that contains handleRefreshToken function to use in other files
module.exports = { handleRefreshToken }