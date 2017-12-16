import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import * as GraphQLDate from "graphql-date";
import { UserType, NewsType } from "./index";
import { User, News } from "../../models/index";

export const CommentType: GraphQLObjectType = new GraphQLObjectType({
  name: "CommmentType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLDate) },
    author: {
      type: UserType,
      async resolve(_parentValue) {
        return await User.findById(_parentValue.authorId);
      }
    },
    news: {
      type: NewsType,
      async resolve(_parentValue) {
        return await News.findById(_parentValue.newsId);
      }
    }
  })
});
