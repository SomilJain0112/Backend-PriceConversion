import express from 'express';
import { getPrice } from '../controllers/priceConverterController.js';

const router = express.Router();
router.post('/price', getPrice);

export default router;

