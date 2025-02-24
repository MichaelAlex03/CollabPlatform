const Faculty = require('../../model/Faculty');

const handleLogout = async (req, res) => {

    const cookie = req.cookies;

    //If cookie does not exist or jwt property doesnt exist then just return succesful status code as there is nothing to clear
    if (!cookie?.jwt) {
        return res.sendStatus(204);
    }

    const refreshToken = cookie.jwt;
    const faculty = await Faculty.findOne({ refreshToken }).exec();

    //If faculty doesnt exist just clear the cookie
    if (!faculty) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        res.sendStatus(204);
    }

    //If there is a faculty that has a matching refresh token set token to empty and clear cookie
    try {
        faculty.refreshToken = '';
        await faculty.save();
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        res.sendStatus(204);
    } catch (err) {
        res.sendStatus(500);
    }

}

module.exports = { handleLogout };