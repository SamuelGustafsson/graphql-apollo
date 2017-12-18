const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

export const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
	"mongodb://admin:password@ds133496.mlab.com:33496/learn-graphql-2";
if (!MONGO_URI) {
	throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () =>
	console.log("Connected to MongoLab instance."),
);
// .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());
app.use(
	"/graphql",
	expressGraphQL({
		schema,
		graphiql: true,
	}),
);