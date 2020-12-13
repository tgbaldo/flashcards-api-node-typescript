export interface ICard {
  id: string;
  front: string;
  back: string;
  packId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
