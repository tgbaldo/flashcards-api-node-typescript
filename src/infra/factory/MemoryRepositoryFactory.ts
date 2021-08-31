import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import DeckRepository from "../../domain/Deck/DeckRepository";
import DeckRepositoryMemory from "../repository/memory/DeckRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {
  createDeckRepository(): DeckRepository {
    return new DeckRepositoryMemory();
  }
}