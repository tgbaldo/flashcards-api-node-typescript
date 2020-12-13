
import { ICreatePack } from '../interfaces/ICreatePack';
import { IPackModel, Pack } from '../models/packModel';

class PackRepository {
  public async getAll(): Promise<IPackModel[]> {
    return Pack.find({});
  }

  public async getById(id: string): Promise<IPackModel | undefined> {
    return Pack.findOne({ _id: id, deletedAt: { $exists: false } });
  }

  public async create(packData: ICreatePack): Promise<IPackModel> {
    const pack = new Pack({
      name: packData.name,
      description: packData.description,
      user: packData.user,
    });

    await pack.save();
    return pack;
  }
}

export const packRepository = new PackRepository;
