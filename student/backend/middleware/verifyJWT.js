const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader?.startsWith('Bearer ')) return res.sendStatus(403) //checks for headers and if so checks that it starts with Bearer
    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err) return res.sendStatus(403); //if there was an error validating token the error object will be defined so an error was encountered
            req.user = decode.username;
            next();
        }
    )
}

module.exports = verifyJWT;