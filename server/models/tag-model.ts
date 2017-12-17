import { Schema, model, Document } from "mongoose";

export interface ITag extends Document {
  readonly tag: string;
  readonly newsId: string;
  readonly authorId: string;
}

export const tagSchema = new Schema({
  text: { type: String, required: true },
  newsId: { type: Schema.Types.ObjectId, ref: "News" },
  authorId: { type: Schema.Types.ObjectId, ref: "Tag" }
});

export const Tag = model<ITag>("Tag", tagSchema);