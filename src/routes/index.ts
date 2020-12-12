import { Router } from 'express';

import { router as packRouter } from './packs';
import { router as userRouter } from './users';

export const router = Router();

router.use('/packs', packRouter);
router.use('/users', userRouter);

export default router;