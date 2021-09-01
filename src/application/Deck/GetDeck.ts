import RepositoryFactory from '../../domain/Core/RepositoryFactory';
import Deck from '../../domain/Deck/Deck';
import DeckRepository from '../../domain/Deck/DeckRepository';

export default class GetDeck {
  deckRepository: DeckRepository;

  constructor (repositoryFactory: RepositoryFactory) {
    this.deckRepository = repositoryFactory.createDeckRepository();
  }

  public async execute(id: string): Promise<Deck | undefined> {
    return this.deckRepository.getById(id);
  }
}
