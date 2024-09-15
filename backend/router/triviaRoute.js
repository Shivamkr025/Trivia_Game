import express from 'express'
import { createQuestion, showAllQuestion } from '../controller/question.js';

const router = express.Router()

router.post('/create/question', createQuestion)

router.get('/show/question', showAllQuestion)

export default router