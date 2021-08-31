import Card from '../../../domain/Card/Card';
import CardRepository from '../../../domain/Deck/CardRepository';

export default class CardRepositoryMemory implements CardRepository {
    cards: Card[];

    constructor () {
      this.cards = [
        new Card(
          "10d06106-86d5-4bbe-9960-a9ea40fe630f",
          "a2b068a0-9515-4617-9831-d2f9a015023e",
          "Qual o primeiro livro da Bíblia?",
          "Gênesis"
        ),
        new Card(
          "2d265ad2-656a-4a33-8edf-957694af29da",
          "a058db29-feb2-40a9-a45e-39919a21fa58",
          "Qual o maior player Brasileiro de CSGO?",
          "Fallen"
        ),
        new Card(
          "1ba141ba-c18e-4108-b316-c99706482e14",
          "947ea4f4-5353-4ed5-883a-f74c885f224c",
          "What's your name?",
          "Qual é o seu nome?"
        ),
      ];
    }

    public async getById(id: string): Promise<Card | undefined> {
      return this.cards.find(d => d.id === id);
    }

    public async save(deck: Card): Promise<void> {
      this.cards.push(deck);
    }
}
