import Deck from '../../../domain/Deck/Deck';
import DeckRepository from '../../../domain/Deck/DeckRepository';

export default class DeckRepositoryMemory implements DeckRepository {
    decks: Deck[];

    constructor () {
      this.decks = [
        new Deck('947ea4f4-5353-4ed5-883a-f74c885f224c', 'Inglês'),
        new Deck('a058db29-feb2-40a9-a45e-39919a21fa58', 'CSGO'),
        new Deck('55fd8f50-f0a1-49f6-8099-1e1efb6749f9', 'Espanhol'),
        new Deck('a2b068a0-9515-4617-9831-d2f9a015023e', 'Bíblia'),
      ];
    }

    public async getById(id: string): Promise<Deck | undefined> {
      return this.decks.find(d => d.id === id);
    }

    public async save(deck: Deck): Promise<void> {
      this.decks.push(deck);
    }

    public async getAll(): Promise<Deck[]> {
      const decks = this.decks;
      if (!decks) {
        return [];
      }

      return decks;
    }
}
