import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from "graphql";
import { UserType, NewsType } from "./types/index";
import { User, News } from "../models/index";
import * as mongoose from "mongoose";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        admin: { type: GraphQLBoolean }
      },
      resolve(_parentValue, { email, password, admin }) {
        return new User({ email, password, admin }).save();
      }
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(_parentValue, { id }) {
        return User.remove({ _id: id });
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        admin: { type: GraphQLBoolean }
      },
      resolve(_parentValue, { id, email, password, admin }) {
        return User.findByIdAndUpdate(id, { email, password, admin });
      }
    },
    addNews: {
      type: NewsType,
      args: {
        userId: { type: GraphQLString },
        title: { type: GraphQLString },
        image: { type: GraphQLString },
        content: { type: GraphQLString }
      },
      async resolve(_parentValue, { userId, title, content, image }) {
        return new News({
          _id: new mongoose.Types.ObjectId(),
          title,
          content,
          image,
          author: userId
        }).save();
      }
    }
  }
});

export default Mutation;
