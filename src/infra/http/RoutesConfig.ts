import { Router, Request, NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import CreateDeck from '../../application/Deck/CreateDeck';
import GetDeck from '../../application/Deck/GetDeck';
import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import IdGenerator from '../../domain/Core/IdGenerator';
import CreateCard from '../../application/Card/CreateCard';
import RateCard from '../../application/Card/RateCard';
import RateCardInput from '../../application/Card/RateCardInput';
import Joi from 'joi';

const router = Router();

export default class RoutesConfig {
  repositoryFactory: any;
  idGenerator: IdGenerator;

  constructor(idGenerator: IdGenerator, repositoryFactory: RepositoryFactory) {
    this.idGenerator = idGenerator;
    this.repositoryFactory = repositoryFactory;
  }

  public getRouter(): Router {
      router.get('/decks/:id', async (request: Request, response: Response, next: NextFunction) => {
        try {
          const getDeck = new GetDeck(this.repositoryFactory);
          const deck = await getDeck.execute(request.params.id);
          return response.json(deck);
        } catch (error) {
          next(error);
        }
      });

      router.post('/decks', async (request: Request, response: Response, next: NextFunction) => {
        try {
          const schema = Joi.object({ name: Joi.string().max(255).required() });
          await schema.validateAsync({ ...request.body });

          const createDeck = new CreateDeck(this.idGenerator, this.repositoryFactory);
          const deck = await createDeck.execute(request.body.name);
          return response.status(201).json(deck);
        } catch (error) {
          next(error);
        }
      });

      router.get('/decks', async (request: Request, response: Response, next: NextFunction) => {
        try {
          return response.status(200).json([]);
        } catch (error) {
          next(error);
        }
      });

      router.post('/cards', async (request: Request, response: Response, next: NextFunction) => {
        try {
          const schema = Joi.object({
            deckId: Joi.string().required(),
            front: Joi.string().required(),
            back: Joi.string().required(),
          });
          const { deckId, front, back } = request.body;
          await schema.validateAsync({ deckId, front, back });

          const createCard = new CreateCard(this.idGenerator, this.repositoryFactory);
          const deck = await createCard.execute({ ...request.body });
          return response.status(201).json(deck);
        } catch (error) {
          next(error);
        }
      });

      router.post('/cards/:id/rate', async (request: Request, response: Response, next: NextFunction) => {
        try {
          const rateCard = new RateCard(this.repositoryFactory);
          const cardId = request.params.id;
          const input = {
            cardId,
            ...request.body
          } as RateCardInput;
          const rate = await rateCard.execute(input);
          return response.status(201).json(rate);
        } catch (error) {
          next(error);
        }
      });

      return router;
  }
}
