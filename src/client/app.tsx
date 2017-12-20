import * as React from "react";
import { Route } from "react-router-dom";
import { LoginComponent } from "./components/login-component";
import { UserList } from "./components/userlist-component";
import { NewsList } from "./components/newslist-component";
import { Nav } from "./components/nav-component";

const App = (): JSX.Element => (
	<div>
		<Nav />
		<Route exact path="/" component={LoginComponent} />
		<Route exact path="/users" component={UserList} />
		<Route exact path="/news" component={NewsList} />
	</div>
);

export default App;
