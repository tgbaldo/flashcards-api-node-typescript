import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import CardRepository from "../../domain/Deck/CardRepository";
import DeckRepository from "../../domain/Deck/DeckRepository";
import CardRepositoryMemory from "../repository/memory/CardRepositoryMemory";
import DeckRepositoryMemory from "../repository/memory/DeckRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {
  createDeckRepository(): DeckRepository {
    return new DeckRepositoryMemory();
  }

  createCardRepository(): CardRepository {
    return new CardRepositoryMemory();
  }
}