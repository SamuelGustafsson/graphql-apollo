import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux-store";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from "./app";

const apolloClient = new ApolloClient({
	link: new HttpLink({ uri: "http://localhost:8080/graphql" }),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById("root") as HTMLElement,
);
