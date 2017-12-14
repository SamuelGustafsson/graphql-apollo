import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLList,
} from "graphql";
import { UserType, NewsType, TagType } from "./types/index";
import { User, News } from "../models/index";
import * as mongoose from "mongoose";

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
		addNews: {
			type: NewsType,
			args: {
				userId: { type: GraphQLID },
				title: { type: GraphQLString },
				image: { type: GraphQLString },
				// tags: { type: new GraphQLList(GraphQLString) },
				content: { type: GraphQLString },
			},
			async resolve(parentValue, { userId, title, content, image }) {
				const userEmail = await User.findById(userId).then(
					user => user && user.email,
				);

				if (!userEmail) throw new Error("Cant find user.");

				return new News({
					_id: new mongoose.Types.ObjectId(),
					title,
					content,
					image,
					author: userEmail,
				}).save();
			},
		},
	},
});

export default Mutation;
