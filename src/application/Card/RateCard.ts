import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import CardRepository from "../../domain/Deck/CardRepository";
import RateRepository from "../../domain/Rate/RateRepository";
import RateCardInput from './RateCardInput';

export default class RateCard {
  cardRepository: CardRepository;
  rateRepository: RateRepository;

  constructor (repositoryFactory: RepositoryFactory) {
    this.cardRepository = repositoryFactory.createCardRepository();
    this.rateRepository = repositoryFactory.createRateRepository();
  }

  public async execute(input: RateCardInput): Promise<void> {
    const card = await this.cardRepository.getById(input.cardId);
    if (!card) throw new Error('Invalid Card');
    const rate = await this.rateRepository.getById(input.rateId);
    if (!rate) throw new Error('Invalid Rate');
    await this.cardRepository.rate(card, rate);
  }
}
