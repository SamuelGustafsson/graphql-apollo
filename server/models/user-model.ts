import { Document, Schema, model } from "mongoose";
const passportLocalMongoose = require("passport-local-mongoose");

export interface IUser extends Document {
	email: string;
	admin: boolean;
	password: string;
}

const schema = new Schema({
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

schema.plugin(passportLocalMongoose);

// Ge modellen till mongoose
export const User = model<IUser>("User", schema);
