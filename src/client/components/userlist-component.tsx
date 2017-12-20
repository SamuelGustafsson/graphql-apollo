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

interface Props {
	data: {
		loading: boolean;
		error: boolean;
		users: ReadonlyArray<User>;
	};
}

export function ContainerComponent({
	data: { loading, error, users },
}: Props): JSX.Element {
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

export type User = {
	email: string;
};
export type Response = {
	data: {
		users: ReadonlyArray<User>;
	};
};

export const UserList = graphql<Response, Props>(query)(ContainerComponent);
