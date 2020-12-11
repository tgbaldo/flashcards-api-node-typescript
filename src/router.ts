import { Router, Response, Request, NextFunction } from 'express';

import { router as routeGroup } from './routes';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: true
  });
});

router.use(routeGroup);

export default router;
