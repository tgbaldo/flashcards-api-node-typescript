import { validate as validateUuid } from 'uuid';
import Card from '../../src/domain/Card/Card';
import IdGeneratorByUuid from '../../src/infra/factory/IdGeneratorByUuid';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';

test('Should creates a card with valid id', async () => {
  const input = {
    deckId: "a058db29-feb2-40a9-a45e-39919a21fa58",
    front: "Quem descobriu o Brasil?",
    back: "Pedro Álvares Cabral"
  };

  const idGenerator = new IdGeneratorByUuid();
  const id = idGenerator.make();
  const { deckId, front, back } = input;

  const repositoryFactory = new MemoryRepositoryFactory();
  const deckRepository = repositoryFactory.createDeckRepository();
  const deck = await deckRepository.getById(deckId);

  const card = new Card(id, deck.getId(), front, back);
  expect(validateUuid(card.getId())).toBe(true);
});