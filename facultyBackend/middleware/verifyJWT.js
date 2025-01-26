const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.header.authorization || req.header.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(403);
    const token = authHeader.split(' ')[1]
    jwt.sign(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err) return res.sendStatus(403);
            req.user = decode.username,
            next();
        }
    )
}

module.exports = verifyJWT;