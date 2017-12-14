import { GraphQLSchema } from "graphql";

import RootQueryType from "./root_query_type";
import Mutations from "./mutations";

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation: Mutations,
});
