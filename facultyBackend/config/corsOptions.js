const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true); //sets Access-Control-Allow-Origin CORS header to true
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessRate: 200
}

module.exports = corsOptions;