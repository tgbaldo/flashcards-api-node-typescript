import { IUserModel, User } from '../models/userModel';

class UserRepository {
  async getByEmail(email: string): Promise<IUserModel | undefined> {
    return User.findOne({ email, deletedAt: { $exists: false } });
  }

  async exists(email: string) {
    return User.exists({ email, deletedAt: { $exists: false } });
  }

  async delete(user: IUserModel) {
    user.deletedAt = new Date();
    await this.save(user);
  }

  async getById(id: string): Promise<IUserModel | undefined> {
    return User.findOne({ _id: id, deletedAt: { $exists: false } });
  }

  async save(user: IUserModel): Promise<IUserModel> {
    await user.save();
    return user;
  }
}

export const userRepository = new UserRepository;
