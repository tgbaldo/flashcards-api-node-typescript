import DeckRepository from "../../domain/Deck/DeckRepository";
import Deck from "../../domain/Deck/Deck";
import RepositoryFactory from "../../shared/RepositoryFactory";
import CreateDeckOutput from './CreateDeckOutput';
import CreateDeckInput from './CreateDeckInput';
import IdGeneratorService from "../../service/IdGeneratorService";

export default class CreateDeck {
  private readonly deckRepository: DeckRepository;

  constructor (
    private readonly idGeneratorService: IdGeneratorService,
    private readonly repositoryFactory: RepositoryFactory
  ) {
    this.deckRepository = this.repositoryFactory.createDeckRepository();
  }

  async execute(input: CreateDeckInput): Promise<CreateDeckOutput> {
    const id = this.idGeneratorService.id();
    const deck = new Deck(id, input.name);
    await this.deckRepository.save(deck);
    return new CreateDeckOutput({ id, ...input });
  }
}