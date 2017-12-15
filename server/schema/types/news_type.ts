import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
const GraphQLDate = require("graphql-date");
import { UserType } from "./index";
import { User, News } from "../../models/index";

export const TagType = new GraphQLObjectType({
  name: "TagType",
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString }
  })
});

export const NewsType = new GraphQLObjectType({
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
