import { v4 as uuid, validate as validateUuid } from 'uuid';
import Card from '../../src/domain/Card/Card';

test('Should creates a card with valid id', () => {
  const input = {
    deckId: "a058db29-feb2-40a9-a45e-39919a21fa58",
    front: "Quem descobriu o Brasil?",
    back: "Pedro Álvares Cabral"
  };

  const { deckId, front, back } = input;
  const id = uuid();

  const card = new Card(id, deckId, front, back);
  expect(validateUuid(card.getId())).toBe(true);
});