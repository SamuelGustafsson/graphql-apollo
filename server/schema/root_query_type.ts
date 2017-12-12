import * as mongoose from "mongoose";
import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLNonNull,
} from "graphql";
import { UserType } from "./user_type";

const User = mongoose.model("User");

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
	}),
});

export default RootQuery;
