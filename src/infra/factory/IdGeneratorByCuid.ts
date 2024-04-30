import { createId } from '@paralleldrive/cuid2';
import IdGenerator from "../../shared/domain/contracts/IdGenerator";

export default class IdGeneratorByCuid implements IdGenerator {
  public id(): string {
    return createId();
  }
}
