import { v4 as uuid } from 'uuid';
import IdGenerator from "../../domain/Core/IdGenerator";

export default class IdGeneratorByUuid implements IdGenerator {
  public make(): string {
    return uuid();
  }
}
