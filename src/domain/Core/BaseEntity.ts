import EntityContract from "./EntityContract";

export default class BaseEntity implements EntityContract {
  id: string;

  constructor (id: string) {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }
}
