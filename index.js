import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = 3000;
const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () => { console.log(`server running on ${PORT}`); });
