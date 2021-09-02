import Card from "../../domain/Card/Card";
import IdGenerator from "../../domain/Core/IdGenerator";
import RepositoryFactory from "../../domain/Core/RepositoryFactory";
import CardRepository from "../../domain/Deck/CardRepository";
import DeckRepository from "../../domain/Deck/DeckRepository";
import CreateCardInput from './CreateCardInput';
import CreateCardOutput from "./CreateCardOutput";

export default class CreateCard {
  idGenerator: IdGenerator;
  deckRepository: DeckRepository;
  cardRepository: CardRepository;

  constructor (idGenerator: IdGenerator, repositoryFactory: RepositoryFactory) {
    this.idGenerator = idGenerator;
    this.deckRepository = repositoryFactory.createDeckRepository();
    this.cardRepository = repositoryFactory.createCardRepository();
  }

  public async execute(input: CreateCardInput): Promise<CreateCardOutput> {
    const id = this.idGenerator.make();
    const deck = await this.deckRepository.getById(input.deckId);
    if (!deck) throw new Error('Invalid Deck!');
    const card = new Card(id, deck.id, input.front, input.back);
    await this.cardRepository.save(card);

    return new CreateCardOutput({ id });
  }
}
