import { Schema, model, Document } from "mongoose";

export interface IComment extends Document {
  readonly text: string;
  readonly date: Date;
  readonly newsId: string;
  readonly authorId: string;
}

export const commentSchema = new Schema({
  text: { type: String, required: true },
  created: { type: Date, default: Date.now },
  authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  newsId: { type: Schema.Types.ObjectId, ref: "News", required: true }
});

export const Comment = model<IComment>("Comment", commentSchema);
