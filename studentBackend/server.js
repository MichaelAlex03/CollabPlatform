const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

//Verifies request is coming from accepted origin
app.use(cors());

//Parses request body into JSON for every request
app.use(express.json());

app.use('/auth/login', require('./routes/auth/login'));
app.use('/auth/register', require('./routes/auth/register'));

//Starts server **should be done at the end after all middleware and enpoints setup**
mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
});
