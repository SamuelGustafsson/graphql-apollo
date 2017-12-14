import { Schema, model, Document } from "mongoose";

export interface INews {
	readonly title: string;
	readonly content: string;
	readonly image?: string;
	readonly author: string;
	readonly created: Date;
}

export interface INewsModel extends INews, Document {}

export const newsSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: { type: String, required: true },
	content: { type: String, required: true },
	image: {
		type: String,
		default:
			"http://1.bp.blogspot.com/-Zr0pmj1bLnM/Uhh7kROhGYI/AAAAAAAAGkE/W51xFS75-Ec/s1600/no-thumbnail.png",
	},
	author: { type: String, required: true },
	created: { type: Date, default: Date.now },
});

export const News = model<INewsModel>("News", newsSchema);
