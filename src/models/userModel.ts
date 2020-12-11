import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { v4 } from 'uuid';

import { IUser } from '../interfaces/IUser';

export interface IUserModel extends Document, IUser {}

const UserSchema: Schema = new Schema(
  {
    _id: { type: String, default: () => v4() },
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
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

export const User = mongoose.model<IUserModel>('user', UserSchema);
