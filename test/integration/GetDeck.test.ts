import { validate as validateUuid } from 'uuid';
import GetDeck from '../../src/application/Deck/GetDeck';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';

test('Should returns a Deck by valid id', async () => {
  const id = '947ea4f4-5353-4ed5-883a-f74c885f224c';
  const repositoryFactory = new MemoryRepositoryFactory;
  const deckRepository = repositoryFactory.createDeckRepository();
  const getDeck = new GetDeck(deckRepository);
  const deck = await getDeck.execute(id);

  expect(validateUuid(deck.getId())).toBe(true);
});
