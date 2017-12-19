import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
	{
		users {
			email
		}
	}
`;

interface Props {}

export function ContainerComponent({
	data: { loading, error, users },
}: any): React.ReactElement<Props> {
	if (loading) {
		return <div>LOADING...</div>;
	}
	if (error) {
		return <div>ERROR...</div>;
	}

	const userList = users.map((user: User, index: number) => {
		return <li key={index}>{user.email}</li>;
	});

	return <ul>{userList}</ul>;
}

export const UserList = graphql<Response>(query)(ContainerComponent);

export type User = {
	email: string;
};
export type Response = {
	users: ReadonlyArray<User>;
};
