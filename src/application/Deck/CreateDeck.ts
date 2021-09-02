import DeckRepository from "../../domain/Deck/DeckRepository";
import IdGenerator from '../../domain/Core/IdGenerator';
import Deck from "../../domain/Deck/Deck";
import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import CreateDeckOutput from './CreateDeckOutput';
import CreateDeckInput from './CreateDeckInput';

export default class CreateDeck {
  deckRepository: DeckRepository;
  idGenerator: IdGenerator;

  constructor (idGenerator: IdGenerator, repositoryFactory: RepositoryFactory) {
    this.deckRepository = repositoryFactory.createDeckRepository();
    this.idGenerator = idGenerator;
  }

  public async execute(input: CreateDeckInput): Promise<CreateDeckOutput> {
    const id = this.idGenerator.make();
    const deck = new Deck(id, input.name);
    await this.deckRepository.save(deck);
    return new CreateDeckOutput({ id, ...input });
  }
}