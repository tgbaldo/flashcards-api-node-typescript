import Card from "../Card/Card";
import Rate from "../Rate/Rate";

export default interface CardRepository {
  getById(id: string): Promise<Card | undefined>;
  save(card: Card): Promise<void>;
  rate(card: Card, rate: Rate): Promise<void>;
}
