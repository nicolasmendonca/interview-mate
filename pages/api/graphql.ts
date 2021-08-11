import { ApolloServer, gql } from 'apollo-server-micro';
import { PageConfig } from 'next';

const typeDefs = gql`
	type Query {
		sum(a: Int!, b: Int!): Int!
	}
`;

const resolvers = {
	Query: {
		sum: (_parent: any, args: { a: number; b: number }) => args.a + args.b,
	},
};

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

export const config: PageConfig = {
	api: {
		bodyParser: false,
	},
};

export default apolloServer.createHandler({ path: '/api/graphql' });
