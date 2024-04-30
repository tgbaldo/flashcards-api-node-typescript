import { isCuid } from '@paralleldrive/cuid2';
import Deck from '../../src/domain/Deck/Deck';
import IdGeneratorByCuid from '../../src/infra/factory/IdGeneratorByCuid';
import IdGeneratorService from '../../src/service/IdGeneratorService';

test("Should creates a Deck with valid id", () => {
  const idGeneratorService = new IdGeneratorService(new IdGeneratorByCuid());
  const id = idGeneratorService.id();
  const input = { name: "Curso de Programação" };
  const deck = new Deck(id, input.name);

  expect(isCuid(deck.id)).toBe(true);
});