import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const options = { port: 4000 };

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

/* eslint-disable no-console */
server.start(options, () =>
  console.log(`Server is running ⚡ on http://localhost:${options.port}`))
  .catch(err => console.error('connection Error', err));
/* eslint-enable no-console */
