const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
// const path = require("path");
const db = require("./models");
const sequelize = require("./config/connection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function () {
    console.log("Now listening on PORT " + PORT);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
