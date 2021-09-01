import DeckRepository from "../Deck/DeckRepository";
import CardRepository from '../Deck/CardRepository';
import RateRepository from '../Rate/RateRepository';

export default interface RepositoryFactory {
  createDeckRepository(): DeckRepository;
  createCardRepository(): CardRepository;
  createRateRepository(): RateRepository;
}
