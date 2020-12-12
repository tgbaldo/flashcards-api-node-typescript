import { IUserModel } from '../models/userModel';
import { userRepository } from '../repositories/userRepository';
import { ICreateUser } from '../interfaces/ICreateUser';

class UserService {
  public async getAll(): Promise<IUserModel[]> {
    return userRepository.getAll();
  }

  public async getUserById(userId: string,): Promise<IUserModel> {
    return userRepository.getById(userId);
  }

  public async getUserByEmail(email: string,): Promise<IUserModel> {
    return userRepository.getByEmail(email);
  }

  public async create(user: ICreateUser): Promise<IUserModel> {
    return userRepository.create(user);
  }
}

export const userService = new UserService;
