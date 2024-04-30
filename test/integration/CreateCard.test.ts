import { isCuid } from '@paralleldrive/cuid2';
import CreateCard from '../../src/application/Card/CreateCard';
import IdGeneratorByCuid from '../../src/infra/factory/IdGeneratorByCuid';
import MemoryRepositoryFactory from '../../src/infra/factory/MemoryRepositoryFactory';
import CreateCardInput from '../../src/application/Card/CreateCardInput';
import IdGeneratorService from '../../src/shared/domain/service/IdGeneratorService';

test("Should creates a card with valid id", async () => {
  const input = {
    deckId: "gzyfsffuu7z1y0pvlq27iqpd",
    front: "Quem descobriu o Brasil?",
    back: "Pedro Álvares Cabral"
  } as CreateCardInput;

  const idGeneratorService = new IdGeneratorService(new IdGeneratorByCuid());
  const repositoryFactory = new MemoryRepositoryFactory();

  const createCard = new CreateCard(idGeneratorService, repositoryFactory);
  const card = await createCard.execute({ ...input });

  expect(isCuid(card.id)).toBe(true);
});

test("Should not creates a card with invalid deck", async () => {
  const input = {
    deckId: "id-de-deck-errado",
    front: "Quem descobriu o Brasil?",
    back: "Pedro Álvares Cabral"
  } as CreateCardInput;

  const idGeneratorService = new IdGeneratorService(new IdGeneratorByCuid());
  const repositoryFactory = new MemoryRepositoryFactory();

  const createCard = new CreateCard(idGeneratorService, repositoryFactory);

  expect(() => createCard.execute({ ...input })).rejects.toThrow(new Error('Invalid Deck!'));
});
