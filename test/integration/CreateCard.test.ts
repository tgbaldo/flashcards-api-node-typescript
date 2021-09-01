import { validate as validateUuid } from 'uuid';
import CreateCard from '../../src/application/Card/CreateCard';
import IdGeneratorByUuid from '../../src/infra/factory/IdGeneratorByUuid';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';

test("Should creates a card with valid id", async () => {
  const input = {
    deckId: "a058db29-feb2-40a9-a45e-39919a21fa58",
    front: "Quem descobriu o Brasil?",
    back: "Pedro Álvares Cabral"
  };

  const idGenerator = new IdGeneratorByUuid();
  const repositoryFactory = new MemoryRepositoryFactory();

  const createCard = new CreateCard(idGenerator, repositoryFactory);
  const cardId = await createCard.execute({ ...input });

  expect(validateUuid(cardId)).toBe(true);
});

test("Should not creates a card with invalid deck", async () => {
  const input = {
    deckId: "id-de-deck-errado",
    front: "Quem descobriu o Brasil?",
    back: "Pedro Álvares Cabral"
  };

  const idGenerator = new IdGeneratorByUuid();
  const repositoryFactory = new MemoryRepositoryFactory();

  const createCard = new CreateCard(idGenerator, repositoryFactory);

  expect(() => createCard.execute({ ...input })).rejects.toThrow(new Error('Invalid Deck!'));
});
