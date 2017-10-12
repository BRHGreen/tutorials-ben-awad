import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const PORT = 3000;
const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors('*'));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

// creates/syncs the database
models.sequelize.sync().then(() => app.listen(PORT));
