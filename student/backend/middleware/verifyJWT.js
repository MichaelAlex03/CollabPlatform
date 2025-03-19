const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader?.startsWith('Bearer ')) return res.status(403).json({"message": "error here"}) //checks for headers and if so checks that it starts with Bearer
    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err) return res.status(403).json({"message": "error hereeeee"}) //if there was an error validating token the error object will be defined so an error was encountered
            req.user = decode.email;
            next();
        }
    )
}

module.exports = verifyJWT;