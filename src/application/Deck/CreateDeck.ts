import DeckRepository from "../../domain/Deck/DeckRepository";
import IdGenerator from '../../domain/Core/IdGenerator';
import Deck from "../../domain/Deck/Deck";
import RepositoryFactory from "../../domain/Core/RepositoryFactory";

export default class CreateDeck {
  deckRepository: DeckRepository;
  idGenerator: IdGenerator;

  constructor (idGenerator: IdGenerator, repositoryFactory: RepositoryFactory) {
    this.deckRepository = repositoryFactory.createDeckRepository();
    this.idGenerator = idGenerator;
  }

  public async execute({ name }: { name: string }): Promise<{id: string}> {
    const id = this.idGenerator.make();
    const deck = new Deck(id, name);
    await this.deckRepository.save(deck);
    return {
      id: deck.id
    };
  }
}