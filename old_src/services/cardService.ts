import { cardRepository } from '../repositories/cardRepository';
import { ICreateCard } from '../interfaces/ICreateCard';
import { ICardModel } from '../models/cardModel';
import { IPack } from '../interfaces/IPack';

class CardService {
  public async getAllByPack(pack: IPack): Promise<ICardModel[]> {
    return cardRepository.getAllByPack(pack);
  }

  public async create(card: ICreateCard): Promise<ICardModel> {
    return cardRepository.create(card);
  }

  public async getById(cardId: string): Promise<ICardModel> {
    return cardRepository.getById(cardId);
  }

  public async fliping(card: ICardModel): Promise<ICardModel> {
    return cardRepository.fliping(card);
  }
}

export const cardService = new CardService;
