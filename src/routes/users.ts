import { Router, Request, Response, NextFunction } from 'express';
import { userService } from '../services/userService';

export const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userService.getAll();
    res.send(users);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const user = await userService.create({
    name: req.body.name,
    email: req.body.email
  });
  res.send(user);
});
