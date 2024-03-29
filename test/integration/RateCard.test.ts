import RateCard from "../../src/application/Card/RateCard";
import RateCardInput from "../../src/application/Card/RateCardInput";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";

test("Should to rate a card", async () => {
  const cardId = "10d06106-86d5-4bbe-9960-a9ea40fe630f";
  const rateId = "6b0a502c-748f-4265-aefb-feeb4fd39452";

  const input = {
    cardId, rateId
  } as RateCardInput;

  const factoryRepository = new MemoryRepositoryFactory();
  const rateCard = new RateCard(factoryRepository);

  expect(await rateCard.execute({ ...input })).toBeUndefined();
});

test("Should not to rate a card with invalid card", async () => {
  const cardId = "10d06106";
  const rateId = "6b0a502c-748f-4265-aefb-feeb4fd39452";

  const input = {
    cardId, rateId
  } as RateCardInput;

  const factoryRepository = new MemoryRepositoryFactory();
  const rateCard = new RateCard(factoryRepository);

  expect(() => rateCard.execute({ ...input })).rejects.toThrow(new Error('Invalid Card'));
});

test("Should not to rate a card with invalid rate", async () => {
  const cardId = "10d06106-86d5-4bbe-9960-a9ea40fe630f";
  const rateId = "6b0a502c";

  const input = {
    cardId, rateId
  } as RateCardInput;

  const factoryRepository = new MemoryRepositoryFactory();
  const rateCard = new RateCard(factoryRepository);

  expect(() => rateCard.execute({ ...input })).rejects.toThrow(new Error('Invalid Rate'));
});
