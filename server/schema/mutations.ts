import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
	GraphQLNonNull,
} from "graphql";
import { UserType } from "./user_type";
import * as mongoose from "mongoose";
import { UserModel } from "../models/index";
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
				return new User({ email, password, admin }).save();
			},
		},
		deleteUser: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parentValue, { id }) {
				return User.remove({ _id: id });
			},
		},
		updateUser: {
			type: UserType,
			args: {
				id: { type: GraphQLID },
				email: { type: GraphQLString },
				password: { type: GraphQLString },
				admin: { type: GraphQLBoolean },
			},
			resolve(parentValue, { id, email, password, admin }) {
				return User.findByIdAndUpdate(id, { email, password, admin });
			},
		},
	},
});

export default Mutation;
