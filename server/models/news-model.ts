import { Schema, model } from "mongoose";

export interface INews {
	readonly title: string;
	readonly image?: string;
	readonly tags?: ReadonlyArray<string>;
	readonly content: string;
	readonly author: string;
	readonly created: Date;
}

export const newsSchema = new Schema({
	title: { type: String, required: true },
	image: {
		type: String,
		default:
			"http://1.bp.blogspot.com/-Zr0pmj1bLnM/Uhh7kROhGYI/AAAAAAAAGkE/W51xFS75-Ec/s1600/no-thumbnail.png",
	},
	tags: [{ type: String }],
	content: { type: String, required: true },
	created: { type: Date, default: Date.now },
});

export const News = model("News", newsSchema);
