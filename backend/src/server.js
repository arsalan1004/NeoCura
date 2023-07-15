// Initialize Express App
const express = require("express");
const app = express();

//Requiring Cors for access-Control-Allow-Origin
const cors = require("cors");

// Require Router
const { Router } = require("./api/routes/Doc_Route/doc_route.js");
const { SignUpRouter } = require("./api/routes/SignUp_Route/signup_Route.js");
const { NavbarRouter } = require("./api/routes/NavBar_Route/navbarRoute.js");

// Require ENV variables
require("dotenv").config();

//Body parser midleware
app.use(express.json());

app.use(cors());

// Use Routes
app.use("/", NavbarRouter);
app.use("/", Router);
app.use("/signup", SignUpRouter);

// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});

module.exports = { app };
