import * as React from "react";
import { Link } from "react-router-dom";

export const Nav = () => (
	<div>
		<ul>
			<li>
				<Link to="/">Login</Link>
			</li>
			<li>
				<Link to="/users">Users</Link>
			</li>
			<li>
				<Link to="/news">News</Link>
			</li>
		</ul>
		<hr />
	</div>
);
