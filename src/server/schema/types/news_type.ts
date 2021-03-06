import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import { UserType, CommentType, TagType } from "./index";
import { User, Comment, Tag } from "../../models/index";

export const NewsType: GraphQLObjectType = new GraphQLObjectType({
  name: "NewsType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
    tags: {
      type: new GraphQLList(TagType),
      async resolve(_parentValue) {
        return await Tag.find({});
      }
    },
    author: {
      type: UserType,
      async resolve(_parentValue) {
        return await User.findById(_parentValue.author);
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      async resolve(_parentValue) {
        return await Comment.find({});
      }
    },
    created: { type: new GraphQLNonNull(GraphQLString) }
  })
});
