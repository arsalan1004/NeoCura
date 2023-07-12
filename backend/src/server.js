// Initialize Express App
const express = require("express");
const app = express();

// Require Router
const { Router } = require("./api/routes/Doc_Route/doc_route.js");

// Require ENV variables
require("dotenv").config();

// Use Routes
app.use("/doctors", Router);

// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});

module.exports = { app };
