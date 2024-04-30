import { isCuid } from '@paralleldrive/cuid2';
import GetDeck from '../../src/application/Deck/GetDeck';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';

test("Should returns a Deck by valid id", async () => {
  const id = 'wjfazn7qnd';
  const repositoryFactory = new MemoryRepositoryFactory;
  const getDeck = new GetDeck(repositoryFactory);
  const deck = await getDeck.execute(id);

  expect(isCuid(deck.id)).toBe(true);
});
