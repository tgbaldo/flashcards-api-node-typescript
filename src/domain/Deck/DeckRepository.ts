import Deck from "./Deck";

export default interface DeckRepository {
  getById(id: string): Promise<Deck | undefined>;
  save(deck: Deck): Promise<void>;
}
