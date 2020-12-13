import { Router, Request, Response, NextFunction } from 'express';
import { packService } from '../services/packService';
import { userService } from '../services/userService';

export const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const packs = await packService.getAll();
    return res.send(packs);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const pack = await packService.create({
    name: req.body.name,
    description: req.body.description,
    user: await userService.getUserById(req.body.user_id)
  });
  return res.send(pack);
});
