import Deck from '../../../domain/Deck/Deck';
import DeckRepository from '../../../domain/Deck/DeckRepository';

export default class DeckRepositoryMemory implements DeckRepository {
    decks: Deck[];

    constructor () {
      this.decks = [
        new Deck('gzyfsffuu7z1y0pvlq27iqpd', 'Inglês'),
        new Deck('wjfazn7qnd', 'CSGO'),
        new Deck('itp2u4ozr4', 'Espanhol'),
      ];
    }

    async getById(id: string): Promise<Deck | undefined> {
      return this.decks.find(d => d.id === id);
    }

    async save(deck: Deck): Promise<void> {
      this.decks.push(deck);
    }

    async getAll(): Promise<Deck[]> {
      const decks = this.decks;
      if (!decks) {
        return [];
      }

      return decks;
    }
}
