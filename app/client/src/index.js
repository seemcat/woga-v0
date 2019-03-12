import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppRouter from "./routes";

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	clientState: {
		defaults: {
			isDisplayingWorkoutForm: false,
		}, 
		resolvers: {
			Mutation: {
				updateWorkoutFormToggleValue: (_, { isDisplayingWorkoutForm }, { cache }) => {
					cache.writeData({ data: { isDisplayingWorkoutForm }});
					return null;
				},
			},
		},
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
	<AppRouter />
	</ApolloProvider>,
	document.getElementById("app")
);
