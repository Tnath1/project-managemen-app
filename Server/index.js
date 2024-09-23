const express = require("express");
// const colors = require("colors ");
// const { graphql } = require("graphql");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/schema");

const port = process.env.PORT || 5000;

const app = express();

// connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server is running on ${port}`));
