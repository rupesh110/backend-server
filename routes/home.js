import express from 'express';

import {
    getQuotes
} from '../controllers/home.js';

const router = express.Router();

router.get('/quote', getQuotes);

export default router;