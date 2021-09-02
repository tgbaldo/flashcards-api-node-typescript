import { Router, Request, NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import CreateDeck from '../../application/Deck/CreateDeck';
import GetDeck from '../../application/Deck/GetDeck';
import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import IdGenerator from '../../domain/Core/IdGenerator';

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
          const createDeck = new CreateDeck(this.idGenerator, this.repositoryFactory);
          const deck = await createDeck.execute(request.body.name);
          return response.json(deck);
        } catch (error) {
          next(error);
        }
      });

      return router;
  }
}
