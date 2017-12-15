import { Schema, model, Document } from "mongoose";

export interface IComment extends Document {
  readonly text: string;
  readonly date: Date;
  readonly author: string;
}

export const commentSchema = new Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
  userId: Schema.Types.ObjectId
});

export const CommentModel = model<IComment>("Comment", commentSchema);
