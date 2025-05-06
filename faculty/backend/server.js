const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const credentials = require('./middleware/credentials');
const verifyJWT = require('./middleware/verifyJWT');

require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

connectDB();

//makes sure request is coming from an accepted origin
app.use(cors(corsOptions));

//Allows for credentials to be sent back to the client
app.use(credentials);

//parses all incoming request body's into json
app.use(express.json());

//Parses cookies from request body
app.use(cookieParser());

app.use('/auth/login', require('./routes/auth/login'));
app.use('/auth/register', require('./routes/auth/register'));
app.use('/auth/logout', require('./routes/auth/logout'));
app.use('/auth/refresh', require('./routes/auth/refresh'));

app.use(verifyJWT);

app.use('/api/faculty', require('./routes/api/faculty'));


mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
});
