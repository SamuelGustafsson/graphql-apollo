import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import { UserType } from "./index";
import { User } from "../../models/index";

export const TagType = new GraphQLObjectType({
  name: "TagType",
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString }
  })
});

export const NewsType: GraphQLObjectType = new GraphQLObjectType({
  name: "NewsType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
    tags: { type: new GraphQLList(TagType) },
    author: {
      type: UserType,
      async resolve(parentValue) {
        return await User.findById(parentValue.author);
      }
    },
    created: { type: new GraphQLNonNull(GraphQLString) }
  })
});
