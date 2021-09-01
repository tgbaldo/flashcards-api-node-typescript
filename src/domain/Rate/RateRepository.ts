import Rate from "./Rate";

export default interface RateRepository {
  getById(id: string): Promise<Rate | undefined>;
}
