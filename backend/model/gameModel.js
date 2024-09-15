import mongoose from "mongoose";

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

const Question = mongoose.model('Question', questionSchema)

export { Question }
