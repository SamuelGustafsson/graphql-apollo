import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
} from "graphql";

export const UserType = new GraphQLObjectType({
	name: "UserType",
	fields: () => ({
		id: { type: GraphQLID },
		email: { type: GraphQLString },
		admin: { type: GraphQLBoolean },
		password: { type: GraphQLString },
	}),
});
