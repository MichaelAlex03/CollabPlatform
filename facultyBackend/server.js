const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

connectDB();

//makes sure request is coming from an accepted origin
app.use(cors(corsOptions));

//parses all incoming request body's into json
app.use(express.json());

// app.use('/auth/login', require('./routes/auth/login'));
app.use('/auth/register', require('./routes/auth/register'));


mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
});
