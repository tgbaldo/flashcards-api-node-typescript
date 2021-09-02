export default class RateCardInput {
  cardId: string;
  rateId: string;

  constructor({ cardId, rateId }: { cardId: string, rateId: string }) {
    this.cardId = cardId;
    this.rateId = rateId;
  }
}
