import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name: { type: String },
    score: { type: Number, default: 0 }
})

const questionSchema = new mongoose.Schema({
    questionId: { type: String },

    category: { type: String },

    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard']
    },

    question: { type: String },

    options: [{ type: String }],

    correctAnswer: { type: String },
})

const gameSchema = new mongoose.Schema({
    
    players: [{ type: String }],
    selectDifficulty: [{ type: String }],
    checkQuestion: [{
        questionId: { type: mongoose.Schema.Types.ObjectId },
        answered: { type: mongoose.Schema.Types.ObjectId },
        correct: { type: Boolean }
    }],

    winner: { type: mongoose.Schema.Types.ObjectId }

})

const Player = mongoose.model('player', nameSchema)
const Question = mongoose.model('Question', questionSchema)
const Game = mongoose.model('Game', gameSchema)

export { Player, Question, Game }
