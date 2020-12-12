import { IUserModel, User } from '../models/userModel';
import { ICreateUser } from '../interfaces/ICreateUser';

class UserRepository {
  public async getAll(): Promise<IUserModel[]> {
    return User.find({});
  }

  public async getByEmail(email: string): Promise<IUserModel | undefined> {
    return User.findOne({ email, deletedAt: { $exists: false } });
  }

  public async getById(id: string): Promise<IUserModel | undefined> {
    return User.findOne({ _id: id, deletedAt: { $exists: false } });
  }

  public async create(userData: ICreateUser): Promise<IUserModel> {
    const user = new User({
      name: userData.name,
      email: userData.email,
    });

    await user.save();
    return user;
  }
}

export const userRepository = new UserRepository;
