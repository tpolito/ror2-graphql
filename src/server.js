const { ApolloServer, gql } = require('apollo-server-express');

const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const config = require('./config.json');

const startServer = async () => {
  // Create instance of express called app
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  // Wait to make sure mongoDB is connected before the entire server starts
  await mongoose.connect(
    `mongodb+srv://${config.user}:${config.password}@ror2-data-hbwry.gcp.mongodb.net/test?retryWrites=true&w=majority`,
    {
      dbName: 'ror2-data',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
