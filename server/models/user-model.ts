import { Document, Schema, model, Model, Promise } from "mongoose";
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
	readonly news?: ReadonlyArray<INews>;
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
	news: {
		type: [newsSchema],
	},
});
// SongSchema.statics.addLyric = function(id, content) {
// 	const Lyric = mongoose.model('lyric');

// 	return this.findById(id)
// 	  .then(song => {
// 		const lyric = new Lyric({ content, song })
// 		song.lyrics.push(lyric)
// 		return Promise.all([lyric.save(), song.save()])
// 		  .then(([lyric, song]) => song);
// 	  });
//   }

userSchema.statics.addNews = function(userId: string, news: INews) {
	return this.findById(userId).then(user => {
		const tempNews = new NewsModel(news);
		user.news.push(tempNews);
		return Promise.all([tempNews.save(), user.save()]).then(
			([tempNews, user]: Array<{}>) => user,
		);
	});
};

export const User = model<IUser>("User", userSchema);

// userSchema.plugin(passportLocalMongoose);
