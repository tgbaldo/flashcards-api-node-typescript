import RepositoryFactory from "../../shared/RepositoryFactory";
import CardRepository from "../../domain/Deck/CardRepository";
import DeckRepository from "../../domain/Deck/DeckRepository";
import CardRepositoryMemory from "../repository/memory/CardRepositoryMemory";
import DeckRepositoryMemory from "../repository/memory/DeckRepositoryMemory";
import RateRepository from '../../domain/Rate/RateRepository';
import RateRepositoryMemory from '../repository/memory/RateRepositoryMemory';

export default class MemoryRepositoryFactory implements RepositoryFactory {
  createDeckRepository(): DeckRepository {
    return new DeckRepositoryMemory();
  }

  createCardRepository(): CardRepository {
    return new CardRepositoryMemory();
  }

  createRateRepository(): RateRepository {
    return new RateRepositoryMemory();
  }
}