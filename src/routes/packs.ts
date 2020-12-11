import { Router, Request, Response, NextFunction } from 'express';
export const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const packs = [
        {'name': 'Pack Name One'},
        {'name': 'Pack Name Two'},
        {'name': 'Pack Name Three'},
    ];
    res.send(packs);
});
