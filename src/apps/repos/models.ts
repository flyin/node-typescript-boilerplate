import { mongoose } from '../../utils/database';
import { Schema, Model, Document } from 'mongoose';

export interface IRepo extends Document {
}

export interface IRepoModel {
}

const schema: Schema = new Schema({

});

export type RepoModel = Model<IRepo> & IRepoModel & IRepo;
export const Repo: RepoModel = <RepoModel>mongoose.model<IRepo>('Repo', schema);
