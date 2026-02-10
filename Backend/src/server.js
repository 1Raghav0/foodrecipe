const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connectionDB');
const cors = require('cors');
connectDB();

const PORT = process.env.PORT  || 3000;

app.use(express.json());

app.use(cors ({
    origin: 'http://localhost:5173',
}))

app.use('/recipes', require('./routes/recipeRoutes'));

app.listen(PORT, (err) => {
    if(err) {
        console.log("Error starting server", err);
    } else {
        console.log(`server is running on ${PORT}`);
    }
})