import { validate as validatasUuid } from  'uuid';
import CreateDeck from '../../src/application/Deck/CreateDeck';
import IdGeneratorByUuid from '../../src/infra/factory/IdGeneratorByUuid';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';
import CreateDeckInput from '../../src/application/Deck/CreateDeckInput';

test("Should creates a deck with valid id", async () => {
  const input = {
    name: 'Curso de PHP'
  } as CreateDeckInput;

  const repositoryFactory = new MemoryRepositoryFactory();
  const idGenerator = new IdGeneratorByUuid();

  const createDeck = new CreateDeck(idGenerator, repositoryFactory);
  const deck = await createDeck.execute({ ...input });
  expect(validatasUuid(deck.id)).toBe(true);
});
