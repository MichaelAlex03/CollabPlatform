const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials')
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const verifyJWT = require('./middleware/verifyJWT')
const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

//Verifies request is coming from accepted origin
app.use(cors(corsOptions));

//Allows for credentials to be sent back (Cookies)
app.use(credentials);

//Parses request body into JSON for every request
app.use(express.json());

//Parses cookies from request
app.use(cookieParser());

//Public endpoints requiring no authentication
app.use('/auth/login', require('./routes/auth/login'));
app.use('/auth/register', require('./routes/auth/register'));
app.use('/auth/refresh', require('./routes/auth/refresh'));
app.use('/auth/logout', require('./routes/auth/logout'));


//All routes past here are protected by JWT token
// app.use(verifyJWT);

//Endpoints require authentication
app.use('/api/student', require('./routes/api/student'));

//Starts server **should be done at the end after all middleware and enpoints setup**
mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
});
