import DeckRepository from "../Deck/DeckRepository";

export default interface RepositoryFactory {
  createDeckRepository(): DeckRepository;
}
