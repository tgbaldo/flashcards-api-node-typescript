import { validate as validateUuid } from 'uuid';
import Deck from '../../src/domain/Deck/Deck';
import IdGeneratorByUuid from '../../src/infra/factory/IdGeneratorByUuid';

test("Should creates a Deck with valid id", () => {
  const idGenerator = new IdGeneratorByUuid();
  const id = idGenerator.make();
  const input = { name: "Curso de Programação" };
  const deck = new Deck(id, input.name);

  expect(validateUuid(deck.id)).toBe(true);
});