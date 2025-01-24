const allowedOrigins = require('../config/allowedOrigins');

//This header allows for the browser to include credentials like cookies in the response
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials;