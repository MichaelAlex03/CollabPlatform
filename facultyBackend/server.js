const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3000;

const app = express();

//makes sure request is coming from an accepted origin
app.use(cors(corsOptions))


app.use(express.json())



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
