import express from 'express';
import { getAllPrizeDraws, getPrizeDrawById, createPrizeDraw } from '../controllers/prize.js';

const router = express.Router();

router.get('/', getAllPrizeDraws);

router.get('/:id', getPrizeDrawById);

router.post('/', createPrizeDraw);

export default router;