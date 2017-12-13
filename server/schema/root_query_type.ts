import * as mongoose from "mongoose";
import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLNonNull,
} from "graphql";
import { UserType, NewsType } from "./types/index";
import { User, News } from "../models/index";

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: () => ({
		users: {
			type: new GraphQLList(UserType),
			resolve() {
				return User.find({});
			},
		},
		user: {
			type: UserType,
			args: { id: { type: new GraphQLNonNull(GraphQLID) } },
			resolve(parentValue, { id }) {
				return User.findById(id);
			},
		},
		newsAll: {
			type: new GraphQLList(NewsType),
			resolve() {
				return News.find({});
			},
		},
	}),
});

export default RootQuery;
