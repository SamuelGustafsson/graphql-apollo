import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
	{
		newsAll {
			title
			content
			created
			author {
				email
			}
		}
	}
`;

interface Props {
	readonly data: {
		loading: boolean;
		error: boolean;
		newsAll: ReadonlyArray<News>;
	};
}

export function ContainerComponent({
	data: { loading, error, newsAll },
}: Props): JSX.Element {
	if (loading) {
		return <div>LOADING...</div>;
	}
	if (error) {
		return <div>ERROR...</div>;
	}

	const newsList = newsAll.map((news: News, index: number) => {
		return <li key={index}>{news.title}</li>;
	});

	return <ul>{newsList}</ul>;
}

type News = {
	readonly title: string;
	readonly content: string;
	readonly created: Date;
	readonly author: string;
};

type Response = {
	newsAll: ReadonlyArray<News>;
};

export const NewsList = graphql<Response, Props>(query)(ContainerComponent);
