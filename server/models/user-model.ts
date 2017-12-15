import { Document, Schema, model } from "mongoose";
export interface IUser extends Document {
  readonly email: string;
  readonly admin: boolean;
  readonly password: string;
  readonly news?: ReadonlyArray<string>;
}

export const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  admin: { type: Boolean, default: false },
  password: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
    default:
      "https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png"
  },
  news: [{ type: Schema.Types.ObjectId, ref: "News" }]
});

export const User = model<IUser>("User", userSchema);
