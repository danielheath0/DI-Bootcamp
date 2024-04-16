import express from 'express'
import { getQuestionOne,submitAndNext,displayScore } from '../controllers/quiz.controller.js'

const router = express.Router()

router.get('/quiz', getQuestionOne)

router.post('/quiz', submitAndNext)

router.get('/quiz/score', displayScore)

export default router