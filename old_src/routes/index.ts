import { Router } from 'express';

import { router as packRouter } from './packs';
import { router as userRouter } from './users';
import { router as cardRouter } from './cards';

export const router = Router();

router.use('/packs', packRouter);
router.use('/users', userRouter);
router.use('/cards', cardRouter);

export default router;