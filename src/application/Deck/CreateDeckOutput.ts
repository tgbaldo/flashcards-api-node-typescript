export default class CreateDeckOutput {
  id: string;
  name: string;

  constructor({ id, name }: { id: string, name: string }) {
    this.id = id;
    this.name = name;
  }
}
