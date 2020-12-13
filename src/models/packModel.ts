import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { v4 } from 'uuid';
import { IPack } from '../interfaces/IPack';
import { User } from './userModel';

export interface IPackModel extends Document, IPack {}

const PackSchema: Schema = new Schema(
  {
    _id: { type: String, default: () => v4() },
    name: {
      type: String,
      required: true,
      index: true
    },
    description: { type: String },
    user: { type: User.schema },
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

export const Pack = mongoose.model<IPackModel>('packs', PackSchema);
