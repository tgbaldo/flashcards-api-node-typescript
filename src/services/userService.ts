import { IUserModel } from '../models/userModel';
import { userRepository } from '../repositories/userRepository';

class UserService {
  public async getUserById(userId: string,): Promise<IUserModel> {
    return userRepository.getById(userId);
  }
}

export const userService = new UserService;
