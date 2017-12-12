import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
} from "graphql";
import { UserType } from "./user_type";
import * as mongoose from "mongoose";
const User = mongoose.model("User");

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addUser: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString },
				admin: { type: GraphQLBoolean },
			},
			resolve(parentValue, { email, password, admin }) {
				console.log("I Mutationen");
				// const user = new User({ email, password, admin }).save();
				// console.log("MUTATION USER:", user);
				return new User({ email, password, admin }).save();
			},
		},
	},
});

export default Mutation;
