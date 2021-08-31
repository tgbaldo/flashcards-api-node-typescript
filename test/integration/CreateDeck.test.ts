import { validate as validatasUuid } from  'uuid';
import CreateDeck from '../../src/application/Deck/CreateDeck';
import IdGeneratorByUuid from '../../src/infra/factory/IdGeneratorByUuid';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';

test('Should creates a deck with valid id', async () => {
  const input = {
    name: 'Curso de PHP'
  };

  const repositoryFactory = new MemoryRepositoryFactory();
  const deckRepository = repositoryFactory.createDeckRepository();
  const idGenerator = new IdGeneratorByUuid();

  const createDeck = new CreateDeck(deckRepository, idGenerator);
  const deckId = await createDeck.execute({ ...input });
  expect(validatasUuid(deckId)).toBe(true);
});