export default class CreateDeckInput {
  name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }
}
