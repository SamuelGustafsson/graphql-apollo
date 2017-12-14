import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
	GraphQLList,
} from "graphql";
import { NewsType } from "./index";
import { News } from "../../models/index";

export const UserType = new GraphQLObjectType({
	name: "UserType",
	fields: () => ({
		id: { type: GraphQLID },
		email: { type: GraphQLString },
		admin: { type: GraphQLBoolean },
		password: { type: GraphQLString },
		news: {
			type: new GraphQLList(NewsType),
			async resolve(parentValue, args) {
				console.log("EMAIL");
				return await News.find({ author: parentValue.email });
			},
		},
	}),
});
