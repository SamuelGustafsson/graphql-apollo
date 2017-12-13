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
				userID: { type: GraphQLID},
				title: { type: GraphQLString },
				image: { type: GraphQLString },
				tags: { type: new GraphQLList(GraphQLString) },
				content: { type: GraphQLString },
				author: { type: GraphQLString },
			},
			resolve(parentValue, args) {
				console.log("ParentValue", parentValue);
				console.log("Args", args);
					User.findById(id;
				
				return "";
				// return new News({ title, image, tags, content, authorId }).save();
			},
		},
	},
});

export default Mutation;
