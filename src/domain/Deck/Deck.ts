import BaseEntity from "../Core/BaseEntity";

export default class Deck extends BaseEntity {
  id: string;
  name: string;

  constructor (id: string, name: string) {
    super(id);

    this.id = id;
    this.name = name;
  }
}