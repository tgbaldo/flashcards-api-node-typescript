import { v4 as uuid, validate as validateUuid } from 'uuid';
import Deck from '../../src/domain/Deck/Deck';

test('Should creates a Deck with valid id', () => {
  const input = { id: uuid(), name: "Curso de Programação" };
  const deck = new Deck(input.id, input.name);

  expect(validateUuid(deck.id)).toBe(true);
});