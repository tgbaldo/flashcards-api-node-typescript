import { Router } from 'express';

import { router as routeGroup } from './routes';

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: true
  });
});

router.use(routeGroup);

export default router;
