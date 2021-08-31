import DeckRepository from "../../domain/Deck/DeckRepository";
import IdGenerator from '../../domain/Core/IdGenerator';
import Deck from "../../domain/Deck/Deck";

export default class CreateDeck {
  deckRepository: DeckRepository;
  idGenerator: IdGenerator;

  constructor (deckRepository: DeckRepository, idGenerator: IdGenerator) {
    this.deckRepository = deckRepository;
    this.idGenerator = idGenerator;
  }

  public async execute({ name }: { name: string }): Promise<string> {
    const id = this.idGenerator.make();
    const deck = new Deck(id, name);
    await this.deckRepository.save(deck);
    return deck.getId();
  }
}