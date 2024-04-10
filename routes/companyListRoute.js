import express from 'express';
import { getCompanyList } from '../controllers/companyListController.js';

const router = express.Router();
router.post('/companies', getCompanyList);

export default router;