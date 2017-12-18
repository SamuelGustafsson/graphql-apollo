import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import { NewsType, CommentType } from "./index";
import { News, Comment } from "../../models/index";

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
      async resolve(_parentValue) {
        return await News.find({ author: _parentValue.id });
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      async resolve(_parentValue) {
        return await Comment.find({ authorId: _parentValue.id });
      }
    }
  })
});
