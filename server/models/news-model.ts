import { Schema, model } from "mongoose";

export interface IComment {
	readonly text: string;
	readonly date: Date;
	readonly author: string;
	readonly userId: string;
}

export interface INews {
	readonly title: string;
	readonly image: string;
	readonly tags: ReadonlyArray<string>;
	readonly content: string;
	readonly comments: ReadonlyArray<string>;
}

const commentSchema = new Schema({
	text: { type: String, required: true },
	date: { type: Date, default: Date.now },
	author: { type: String, required: true },
	userImage: String,
	userId: Schema.Types.ObjectId,
});

const newsSchema = new Schema({
	title: { type: String, required: true },
	image: {
		type: String,
		default:
			"http://1.bp.blogspot.com/-Zr0pmj1bLnM/Uhh7kROhGYI/AAAAAAAAGkE/W51xFS75-Ec/s1600/no-thumbnail.png",
	},
	tags: [{ type: String }],
	content: { type: String, required: true },
	comments: [commentSchema],
	date: { type: Date, default: Date.now },
});

export const News = model("News", newsSchema);
