import Deck from '../../domain/Deck/Deck';
import DeckRepository from '../../domain/Deck/DeckRepository';

export default class GetDeck {
  deckRepository: DeckRepository;

  constructor (deckRepository: DeckRepository) {
    this.deckRepository = deckRepository;
  }

  public async execute(id: string): Promise<Deck | undefined> {
    return this.deckRepository.getById(id);
  }
}
