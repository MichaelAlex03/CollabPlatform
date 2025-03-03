const Student = require('../../model/Student');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {

    const cookies = req.cookies;
    console.log(req);
    // Check if there is a property of the cookie called jwt
    // Optional chaining (?.) allows reading the value of `cookies.jwt` without causing an error if `cookies` is undefined or null
    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }

    //Checks if the refresh token matches a students refresh token in the db if not return a 403 (Unauthorized)
    const refreshToken = cookies.jwt;
    const user = await Student.findOne({ refreshToken }).exec();

    if (!user) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        //checks if the user found with the refreshToken matches the user in the payload of the JWT token
        if (err || user.email !== decoded.email) {
            return res.status(403);
        }

        //If refresh token is valid create a new access token and send it back to the front end
        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
        return res.status(200).json(
            {
                accessToken
            }
        );
    });
}

//returns object that contains handleRefreshToken function to use in other files
module.exports = { handleRefreshToken }