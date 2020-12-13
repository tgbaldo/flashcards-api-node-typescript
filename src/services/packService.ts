import { IPackModel } from '../models/packModel';
import { packRepository } from '../repositories/packRepository';
import { ICreatePack } from '../interfaces/ICreatePack';

class PackService {
  public async getAll(): Promise<IPackModel[]> {
    return packRepository.getAll();
  }

  public async create(pack: ICreatePack): Promise<IPackModel> {
    return packRepository.create(pack);
  }
}

export const packService = new PackService;
