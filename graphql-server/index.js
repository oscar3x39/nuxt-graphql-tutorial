const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }
  
  type User {
    id: ID
    name: String
    email: String
  }
`;

// Sample data
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
];

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: () => users,
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize Express
const app = express();

async function startServer() {
  await server.start();
  
  // Apply middleware
  server.applyMiddleware({ app, path: '/graphql' });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GraphQL server running at http://0.0.0.0:${PORT}${server.graphqlPath}`);
  });
}

startServer();
