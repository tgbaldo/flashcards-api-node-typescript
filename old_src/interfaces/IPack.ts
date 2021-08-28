import { IUser } from './IUser';

export interface IPack {
  id: string,
  name: string,
  description: string,
  user: IUser,
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
