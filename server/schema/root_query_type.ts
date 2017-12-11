import * as mongoose from "mongoose";
import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLNonNull,
} from "graphql";

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: () => ({}),
});

module.exports = RootQuery;
