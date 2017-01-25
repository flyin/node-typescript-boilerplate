import { mongoose } from '../../utils/database';
import { Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
}

export interface IUserModel {
}

const schema: Schema = new Schema({

});

export type UserModel = Model<IUser> & IUserModel & IUser;
export const User: UserModel = <UserModel>mongoose.model<IUser>('User', schema);
