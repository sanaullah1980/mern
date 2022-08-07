import express from "express";
import dotenv from "dotenv";
import route from './routes/jokes.js';
import connectDB from './config/db.js';

//loading config
dotenv.config({path: './config/config.env'});
connectDB();

const app = express();

app.use(express.json(), express.urlencoded({extended: true}));
//Mount routes
app.use('/api/jokes',route);

const PORT = process.env.PORT;



app.listen(PORT,
    console.log(`Server running on port ${PORT}`));