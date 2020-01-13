const express = require('express');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const services = require('./services')
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');
const Context = require('./context');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;
const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(
    {
      schema: schema,
      context: (request) => new Context(request, services)
    }
  )
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);