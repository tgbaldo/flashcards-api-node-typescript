import RepositoryFactory from '../../shared/RepositoryFactory';
import Deck from '../../domain/Deck/Deck';
import DeckRepository from '../../domain/Deck/DeckRepository';

export default class GetDeck {
  deckRepository: DeckRepository;

  constructor (repositoryFactory: RepositoryFactory) {
    this.deckRepository = repositoryFactory.createDeckRepository();
  }

  async execute(id: string): Promise<Deck> {
    const deck = await this.deckRepository.getById(id);
    if (!deck) throw new Error('Card not found');
    return deck;
  }
}
