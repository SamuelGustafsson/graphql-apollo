import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const apolloClient = new ApolloClient({
	link: new HttpLink({ uri: "http://localhost:8080/graphql" }),
	cache: new InMemoryCache(),
});

const Root = () => {
	return (
		<ApolloProvider client={apolloClient}>
			<div>Katt</div>;
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector("#root"));
