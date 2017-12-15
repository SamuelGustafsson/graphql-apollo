import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import { NewsType } from "./index";
import { News } from "../../models/index";

export const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    admin: { type: GraphQLBoolean },
    password: { type: new GraphQLNonNull(GraphQLString) },
    userImage: { type: GraphQLString },
    news: {
      type: new GraphQLList(NewsType),
      async resolve(parentValue, args) {
        return await News.find({ author: parentValue.id });
      }
    }
  })
});
