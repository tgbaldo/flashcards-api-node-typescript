import Card from "../../domain/Card/Card";
import RepositoryFactory from "../../shared/RepositoryFactory";
import CardRepository from "../../domain/Deck/CardRepository";
import DeckRepository from "../../domain/Deck/DeckRepository";
import CreateCardInput from './CreateCardInput';
import CreateCardOutput from "./CreateCardOutput";
import IdGeneratorService from "../../service/IdGeneratorService";

export default class CreateCard {
  private readonly deckRepository: DeckRepository;
  private readonly cardRepository: CardRepository;

  constructor (
    private readonly idGeneratorService: IdGeneratorService,
    private readonly repositoryFactory: RepositoryFactory
  ) {
    this.deckRepository = this.repositoryFactory.createDeckRepository();
    this.cardRepository = this.repositoryFactory.createCardRepository();
  }

  public async execute(input: CreateCardInput): Promise<CreateCardOutput> {
    const id = this.idGeneratorService.id();
    const deck = await this.deckRepository.getById(input.deckId);
    if (!deck) throw new Error('Invalid Deck!');
    const card = new Card(id, deck.id, input.front, input.back);
    await this.cardRepository.save(card);

    return new CreateCardOutput({ id });
  }
}
