import IdGenerator from "../shared/domain/contracts/IdGenerator";

export default class IdGeneratorService {
  constructor (private readonly idGenerator: IdGenerator) {}

  id(): string {
    return this.idGenerator.id();
  }
}