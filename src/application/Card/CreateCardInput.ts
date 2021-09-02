export default class CreateCardInput {
  deckId: string;
  front: string;
  back: string;

  constructor({ deckId, front, back }: { deckId: string, front: string, back: string }) {
    this.deckId = deckId;
    this.front = front;
    this.back = back;
  }
}
