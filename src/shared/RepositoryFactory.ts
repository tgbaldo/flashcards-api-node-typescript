import DeckRepository from "../domain/Deck/DeckRepository";
import CardRepository from '../domain/Deck/CardRepository';
import RateRepository from '../domain/Rate/RateRepository';

export default interface RepositoryFactory {
  createDeckRepository(): DeckRepository;
  createCardRepository(): CardRepository;
  createRateRepository(): RateRepository;
}
