import Card from '../../../domain/Card/Card';
import Rate from '../../../domain/Rate/Rate';
import CardRepository from '../../../domain/Deck/CardRepository';

export default class CardRepositoryMemory implements CardRepository {
    cards: Card[];
    rates: (Rate & { created_at: Date })[];

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

      this.rates = [
        Object.assign(new Rate("6b0a502c-748f-4265-aefb-feeb4fd39452", "Bom"), { created_at: new Date("2021-08-01") }),
        Object.assign(new Rate('6b0a502c-748f-4265-aefb-feeb4fd39452', "Bom"), { created_at: new Date("2021-08-01") }),
        Object.assign(new Rate('33005f6f-530b-42f6-b2f5-4a943df621f7', "Fácil"), { created_at: new Date("2021-08-02") }),
        Object.assign(new Rate('6b0a502c-748f-4265-aefb-feeb4fd39452', "Bom"), { created_at: new Date("2021-08-03") }),
        Object.assign(new Rate('57efcc36-2b96-4421-a3e8-98acda9e1bde', "Revisar"), { created_at: new Date("2021-08-04") }),
        Object.assign(new Rate('1db1281c-ba75-4951-84ff-a8f8b707bdc4', "Difícil"), { created_at: new Date("2021-08-05") }),
        Object.assign(new Rate('33005f6f-530b-42f6-b2f5-4a943df621f7', "Fácil"), { created_at: new Date("2021-08-06") })
      ];
    }

    public async getById(id: string): Promise<Card | undefined> {
      return this.cards.find(d => d.id === id);
    }

    public async save(deck: Card): Promise<void> {
      this.cards.push(deck);
    }

    public async rate(card: Card, rate: Rate): Promise<void> {
      this.rates.push(Object.assign(rate, { created_at: new Date() }));
    }
}
