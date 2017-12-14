import { Document, Schema, model, Model, Promise } from "mongoose";
import * as mongoose from "mongoose";
import {
	IComment,
	commentSchema,
	INews,
	newsSchema,
	News as NewsModel,
} from "./index";
// const passportLocalMongoose = require("passport-local-mongoose");

export interface IUser extends Document {
	readonly email: string;
	readonly admin: boolean;
	readonly password: string;
	readonly news?: ReadonlyArray<string>;
}

interface IUserModel extends IUser, Document {
	// addNews: (userId: string, news: INews) => {};
}

export const userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	email: {
		type: String,
		required: true,
	},
	admin: { type: Boolean, default: false },
	password: {
		type: String,
		required: true,
	},
	news: [{ type: Schema.Types.ObjectId, ref: "News" }],
});

// userSchema.statics.addNews = function(userId: string, news: INews) {
// 	const News = mongoose.model("News");

// 	return this.
// };

export const User = model<IUserModel>("User", userSchema);

// userSchema.plugin(passportLocalMongoose);

// SongSchema.statics.addLyric = function(id, content) {
// 	const Lyric = mongoose.model("lyric");

// 	return this.findById(id).then(song => {
// 		const lyric = new Lyric({ content, song });
// 		song.lyrics.push(lyric);
// 		return Promise.all([lyric.save(), song.save()]).then(
// 			([lyric, song]) => song,
// 		);
// 	});
// };
