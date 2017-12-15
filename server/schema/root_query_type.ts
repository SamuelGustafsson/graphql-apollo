import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from "graphql";
import { UserType, NewsType } from "./types/index";
import { User, News } from "../models/index";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_parentValue, { id }) {
        return User.findById(id);
      }
    },
    newsAll: {
      type: new GraphQLList(NewsType),
      resolve() {
        return News.find({});
      }
    },
    news: {
      type: NewsType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_parentValue, { id }) {
        return News.findById(id);
      }
    }
  })
});

export default RootQuery;
