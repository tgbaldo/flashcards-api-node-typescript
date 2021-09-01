import Rate from '../../../domain/Rate/Rate';
import RateRepository from '../../../domain/Rate/RateRepository';

export default class RateRepositoryMemory implements RateRepository {
    rates: Rate[];

    constructor () {
      this.rates = [
        new Rate('6b0a502c-748f-4265-aefb-feeb4fd39452', 'Bom'),
        new Rate('33005f6f-530b-42f6-b2f5-4a943df621f7', 'Fácil'),
        new Rate('57efcc36-2b96-4421-a3e8-98acda9e1bde', 'Revisar'),
        new Rate('1db1281c-ba75-4951-84ff-a8f8b707bdc4', 'Difícil'),
      ];
    }

    public async getById(id: string): Promise<Rate | undefined> {
      return this.rates.find(d => d.id === id);
    }

    public async save(rate: Rate): Promise<void> {
      this.rates.push(rate);
    }
}
