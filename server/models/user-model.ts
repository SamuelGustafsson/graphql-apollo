import { Document, Schema, model, Model } from "mongoose";
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  admin: { type: Boolean, default: false },
  password: {
    type: String,
    required: true
  }
});

userSchema.statics.static1 = function() {
  return "";
};

export interface IUser extends Document {
  readonly email: string;
  readonly admin: boolean;
  readonly password: string;
}

export interface IUserModel extends Model<IUser> {
  addUser: () => string;
}

// Ge modellen till mongoose
export const UserModel = model<IUser, IUserModel>("User", userSchema);

// userSchema.plugin(passportLocalMongoose);
