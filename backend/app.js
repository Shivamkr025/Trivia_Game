import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import triviaRouter from './router/triviaRoute.js';

const app = express()
const PORT = 3000

app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())
app.use('/', triviaRouter)

const DBConnect = "mongodb+srv://shivam22:shivam22@shivam.n1mrvon.mongodb.net/Trivia-Battle?retryWrites=true&w=majority&appName=shivam"

mongoose.connect(DBConnect)
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
