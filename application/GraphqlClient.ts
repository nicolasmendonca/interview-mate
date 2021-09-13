import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient('https://interview-mate.hasura.app/v1/graphql', {
	headers: {
		'Content-Type': 'application/json',
		'x-hasura-admin-secret': 'yh45ya7rxcA5wmD9mn8sSw7vXkOorsK3hVODdXPzehPl2z707pIaomJ2zZjuOBbf',
	},
});
