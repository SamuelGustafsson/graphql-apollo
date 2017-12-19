import * as React from "react";
import { UserList } from "./components/userlist";

function App(): React.ReactElement<void> {
	return (
		<div>
			<UserList />
		</div>
	);
}

export default App;
