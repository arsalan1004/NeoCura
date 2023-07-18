// Initialize Express App
const express = require("express");
const app = express();

//Requiring Cors for access-Control-Allow-Origin
const cors = require("cors");

// Require Router
const { Router } = require("./api/routes/DocList_Route/doc_route.js");
const { BlogRouter } = require("./api/routes/Blog_Route/blog_route.js");
const { SignUpRouter } = require("./api/routes/SignUp_Route/signup_Route.js");
const { indvRouter } = require("./api/routes/IndvDoc_Route/indvDocRoute.js");
const { SpecRouter } = require("./api/routes/SpecList_Route/specListRoute.js");

// Require ENV variables
require("dotenv").config();

//Body parser midleware
app.use(express.json());

app.use(cors());

// Use Routes
app.use("/", Router);
app.use("/blogs", BlogRouter);
app.use("/signup", SignUpRouter);
app.use("/", indvRouter);
app.use("/", SpecRouter);
// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});

module.exports = { app };
