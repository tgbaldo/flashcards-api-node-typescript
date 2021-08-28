import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { v4 } from 'uuid';
import { ICard } from '../interfaces/ICard';

export interface ICardModel extends Document, ICard {}

const CardSchema: Schema = new Schema(
  {
    _id: { type: String, default: () => v4() },
    front: { type: String, required: true, trim: true },
    back: { type: String, required: true, trim: true },
    packId: { type: String },
    updatedAt: { type: Date, required: true, default: () => new Date() },
    createdAt: { type: Date, required: true, default: () => new Date() },
    deletedAt: { type: Date, required: false, index: true },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret.updatedAt;
        delete ret.createdAt;
        delete ret.deletedAt;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Card = mongoose.model<ICardModel>('cards', CardSchema);
