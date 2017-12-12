import { Document, Schema, model, Model } from "mongoose";
// const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	admin: { type: Boolean, default: false },
	password: {
		type: String,
		required: true,
	},
});

export interface IUser extends Document {
	readonly email: string;
	readonly admin: boolean;
	readonly password: string;
}

export const UserModel = model<IUser>("User", userSchema);

// userSchema.plugin(passportLocalMongoose);
