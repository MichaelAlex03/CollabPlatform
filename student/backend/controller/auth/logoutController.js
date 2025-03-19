const Student = require('../../model/Student');

const handleLogout = async (req, res) => {
    // Make sure to clear the accessToken on the client side

    const cookies = req.cookies;

    // Check if cookies exist with jwt property which contains the refreshToken
    if (!cookies?.jwt) {
        return res.sendStatus(204);
    }

    const refreshToken = cookies.jwt;

    // Find user with the matching refresh token
    const user = await Student.findOne({ refreshToken }).exec();

    // If there is not a user with the refresh token just clear cookie
    if (!user) {
        // Clear the cookie with the following options:
        // httpOnly: The cookie is inaccessible to JavaScript's Document.cookie API; it can only be sent in HTTP requests.
        // sameSite: The cookie can be sent from different origins.
        // secure: The cookie is only sent over HTTPS, ensuring it is encrypted during transmission.
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // If there is a user clear cookie and set refreshToken property to ''
    try {
        user.refreshToken = '';
        await user.save();
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
};

// Creates an object that has the handleLogout function in it and can be called
module.exports = { handleLogout };
