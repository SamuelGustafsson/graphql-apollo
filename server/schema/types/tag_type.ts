import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from "graphql";

import { UserType, NewsType } from "./index";
import { User, News } from "../../models/index";

export const TagType = new GraphQLObjectType({
  name: "TagType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    news: {
      type: NewsType,
      async resolve(_parentValue) {
        return await News.findById(_parentValue.newsId);
      }
    },
    author: {
      type: UserType,
      async resolve(_parentValue) {
        return await User.findById(_parentValue.authorId);
      }
    }
  })
});
