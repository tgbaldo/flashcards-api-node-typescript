import { Router, Request, Response, NextFunction } from 'express';
import { userService } from '../services/userService';

export const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userService.getAll();
    return res.send(users);
});

router.get('/email/:email', async (req: Request, res: Response, next: NextFunction) => {
  const user = await userService.getUserByEmail(req.params.email);
  return res.send(user);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const user = await userService.create({
    name: req.body.name,
    email: req.body.email
  });
  return res.send(user);
});
