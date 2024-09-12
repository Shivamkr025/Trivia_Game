import express from 'express'
import { createPlayer } from '../controller/player.js';
import { createQuestion, showAllQuestion } from '../controller/question.js';

const router = express.Router()

router.post('/create/question', createQuestion)

router.get('/show/question', showAllQuestion)

router.post('/create/player', createPlayer)

// router.post('/category/select' , categorySelect)

export default router