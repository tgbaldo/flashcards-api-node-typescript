export interface ICard {
  id: string;
  front: string;
  back: string;
  packId: string;
  flips: [],
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
