import { Schema, model, Document } from "mongoose";

export interface ITag {
  readonly tag: string;
}

export interface ITagModel extends ITag, Document {}

export const tagSchema = new Schema({
  _id: Schema.Types.ObjectId,
  text: { type: String, required: true }
});

export const Tag = model<ITagModel>("Tag", tagSchema);
