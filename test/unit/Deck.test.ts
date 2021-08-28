import { v4 as uuid, validate as validateUuid } from 'uuid';
import Deck from '../../src/domain/Deck/Deck';

test('Should be create a Pack', () => {
  const input = {
    id: uuid(),
    name: "Inglês",
  };

  const { id, name } = input;

  const deck = new Deck(id, name);

  expect(validateUuid(deck.id)).toBe(true);
});