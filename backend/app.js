import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import triviaRouter from './src/router/triviaRoute.js';

const app = express()
const PORT = 3000

app.use(cors({
    origin: true,
    methods:['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true 
}))

app.use(express.json())
app.use('/', triviaRouter)

mongoose.connect('mongodb://localhost:27017/Trivia-Battle')
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
