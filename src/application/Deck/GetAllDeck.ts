import RepositoryFactory from '../../domain/Core/RepositoryFactory';
import Deck from '../../domain/Deck/Deck';
import DeckRepository from '../../domain/Deck/DeckRepository';
import GetDeckOutput from './GetDeckOutput';

export default class GetAllDeck {
  deckRepository: DeckRepository;

  constructor (repositoryFactory: RepositoryFactory) {
    this.deckRepository = repositoryFactory.createDeckRepository();
  }

  public async execute(): Promise<GetDeckOutput[] | []> {
    const decks = await this.deckRepository.getAll();
    if (!decks) {
      return [];
    }

    return decks.map((d: Deck) => {
      return new GetDeckOutput({ id: d.id, name: d.name });
    });
  }
}
