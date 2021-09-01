export default class Card {
  id: string;
  front: string;
  back: string;

  constructor (id: string, deckId: string, front: string, back: string) {
    this.id = id;
    this.front = front;
    this.back = back;
  }
}
