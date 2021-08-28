import { Router, Request, Response, NextFunction } from 'express';
import { packService } from '../services/packService';
import { cardService } from '../services/cardService';

export const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const pack = await packService.getById(String(req.query.pack_id));
  const cards = await cardService.getAllByPack(pack);
  return res.send(cards);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const pack = await packService.getById(req.body.pack_id);
  const card = await cardService.create({
    front: req.body.front,
    back: req.body.back,
    pack: pack
  });
  return res.send(card);
});

router.post('/:cardId/fliping', async (req: Request, res: Response, next: NextFunction) => {
  const card = await cardService.getById(req.params.cardId);
  const fliping = await cardService.fliping(card);
  return res.send(fliping);
});
