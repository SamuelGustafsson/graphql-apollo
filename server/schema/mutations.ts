import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import * as mongoose from "mongoose";

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {},
});

module.exports = mutation;
