
import { ICreateCard } from '../interfaces/ICreateCard';
import { Card, ICardModel } from '../models/cardModel';
import { IPack } from '../interfaces/IPack';

class CardRepository {
  public async getById(id: string): Promise<ICardModel | undefined> {
    return Card.findOne({ _id: id, deletedAt: { $exists: false } });
  }

  public async getAllByPack(pack: IPack): Promise<ICardModel[]> {
    return await Card.find({ packId: pack.id });
  }

  public async create(cardData: ICreateCard): Promise<ICardModel> {
    const card = new Card({
      front: cardData.front,
      back: cardData.back,
      packId: cardData.pack.id
    });

    return await card.save();
  }

  public async fliping(card: ICardModel): Promise<ICardModel> {
    return await card.update({
      $push: { teste: 10 }
    });
  }
}

export const cardRepository = new CardRepository;
