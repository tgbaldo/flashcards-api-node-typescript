import Card from "../../domain/Card/Card";
import IdGenerator from "../../domain/Core/IdGenerator";
import CardRepository from "../../domain/Deck/CardRepository";
import DeckRepository from "../../domain/Deck/DeckRepository";

export default class CreateCard {
  idGenerator: IdGenerator;
  deckRepository: DeckRepository;
  cardRepository: CardRepository;

  constructor (idGenerator: IdGenerator, deckRepository: DeckRepository, cardRepository: CardRepository) {
    this.idGenerator = idGenerator;
    this.deckRepository = deckRepository;
    this.cardRepository = cardRepository;
  }

  public async execute({ deckId, front, back }: { deckId: string, front: string, back: string }): Promise<string> {
    const id = this.idGenerator.make();
    const deck = await this.deckRepository.getById(deckId);
    if (!deck) throw new Error('Deck not found!');
    const card = new Card(id, deck.getId(), front, back);
    await this.cardRepository.save(card);

    return card.getId();
  }
}
