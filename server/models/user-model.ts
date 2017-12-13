import { Document, Schema, model, Model } from "mongoose";
import { IComment, commentSchema } from "./comment-model";
// const passportLocalMongoose = require("passport-local-mongoose");

export interface IUser extends Document {
	readonly email: string;
	readonly admin: boolean;
	readonly password: string;
	readonly comments?: ReadonlyArray<IComment>;
}

export const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	admin: { type: Boolean, default: false },
	password: {
		type: String,
		required: true,
	},
	comments: [commentSchema],
});

export const User = model<IUser>("User", userSchema);

// userSchema.plugin(passportLocalMongoose);
