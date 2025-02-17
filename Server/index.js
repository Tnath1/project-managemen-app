const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/schema");

const port = process.env.PORT || 5000;



const app = express();


app.get( "/", (reg, res) => {
res.json({message : "Hello from the backend"})
})

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
