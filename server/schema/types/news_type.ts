import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
	GraphQLList,
} from "graphql";
const GraphQLDate = require("graphql-date");
import { UserType } from "./index";

export const TagType = new GraphQLObjectType({
	name: "TagType",
	fields: () => ({
		// id: { type: GraphQLID },
		text: { type: GraphQLString },
	}),
});

export const NewsType = new GraphQLObjectType({
	name: "NewsType",
	fields: () => ({
		id: { type: GraphQLID },
		image: { type: GraphQLString },
		tags: { type: new GraphQLList(TagType) },
		content: { type: GraphQLString },
		author: { type: UserType },
		created: { type: GraphQLDate },
	}),
});
