import express from 'express';
import kwizs from './routes/kwizs'

const router = express.Router();
router.use('/kwizs', kwizs);

export default router;
