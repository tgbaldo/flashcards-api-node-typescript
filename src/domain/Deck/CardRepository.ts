import Card from "../Card/Card";

export default interface CardRepository {
  getById(id: string): Promise<Card | undefined>;
  save(card: Card): Promise<void>;
}
