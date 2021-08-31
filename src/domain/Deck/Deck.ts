export default class Deck {
  id: string;
  name: string;

  constructor (id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }
}
