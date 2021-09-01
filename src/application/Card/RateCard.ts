import CardRepository from "../../domain/Deck/CardRepository";
import RateRepository from "../../domain/Rate/RateRepository";

export default class RateCard {
  cardRepository: CardRepository;
  rateRepository: RateRepository;

  constructor (cardRepository: CardRepository, rateRepository: RateRepository) {
    this.cardRepository = cardRepository;
    this.rateRepository = rateRepository;
  }

  public async execute(cardId: string, rateId: string): Promise<void> {
    const card = await this.cardRepository.getById(cardId);
    if (!card) {
      throw new Error('Card not found');
    }
    const rate = await this.rateRepository.getById(rateId);
    if (!rate) {
      throw new Error('Rate not found');
    }
    await this.cardRepository.rate(card, rate);
  }
}
