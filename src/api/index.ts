import express from 'express';
import annonce from './routes/annonce'

const router = express.Router();
router.use('/annonces', annonce);

export default router;
