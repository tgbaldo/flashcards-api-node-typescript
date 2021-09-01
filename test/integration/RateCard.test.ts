import RateCard from "../../src/application/Card/RateCard";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";

test("Should to rate a card", async () => {
  const cardId = "10d06106-86d5-4bbe-9960-a9ea40fe630f";
  const rateId = "6b0a502c-748f-4265-aefb-feeb4fd39452";

  const factoryRepository = new MemoryRepositoryFactory();
  const cardRepository = factoryRepository.createCardRepository();
  const rateRepository = factoryRepository.createRateRepository();
  const rateCard = new RateCard(cardRepository, rateRepository);

  expect(await rateCard.execute(cardId, rateId)).toBeUndefined();
});
