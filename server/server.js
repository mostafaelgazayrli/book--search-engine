require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors"); // Add CORS
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS (adjust the origins as necessary for your use case)
app.use(cors());

// Create Apollo server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Token authentication middleware
});

// Apply Apollo server middleware to Express
server.applyMiddleware({ app });

// Middleware for parsing incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the React front-end if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Wildcard route for all other requests, serving the React front-end
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack to the console
  res.status(500).send("Something went wrong!"); // Send generic error response
});

// Connect to the database and start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
