import { IUser } from './IUser';

export interface ICreatePack {
  name: string;
  description: string;
  user: IUser;
}
