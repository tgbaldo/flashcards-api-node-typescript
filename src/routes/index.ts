import { Router } from 'express';

import { router as packRouter } from './packs';

export const router = Router();

router.use('/packs', packRouter);
