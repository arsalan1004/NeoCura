// Initialize Express App
const express = require("express");
const app = express();

//Requiring Cors for access-Control-Allow-Origin
const cors = require("cors");

// Require Router
const { Router } = require("./api/routes/DocList_Route/doc_route.js");
const { BlogRouter } = require("./api/routes/Blog_Route/blog_route.js");
const { SignUpRouter } = require("./api/routes/SignUp_Route/signup_Route.js");
const {
  SearchBarRouter,
} = require("./api/routes/SearchBar_Route/search_bar_route.js");
const {hosRouter} = require('./api/routes/HospitalList_Route/hosRoute.js');
const { clinRouter } = require("./api/routes/indvClinic_Route/clinicRoute.js");
const { DocRouter } = require("./api/routes/Indv_Route/indvDocRoute.js");
const { NavbarRouter } = require("./api/routes/NavBar_Route/navbarRoute.js");
const { getNavData } = require("./api/controllers/Navbar_controller/index.js");

// Require ENV variables
require("dotenv").config();

//Body parser midleware
app.use(express.json());

app.use(cors());

// Use Routes
app.use("/", Router);
app.use("/", NavbarRouter);
app.use("/doclist", DocRouter);
app.use("/blogs", BlogRouter);
app.use('/searchBarApi',SearchBarRouter)
app.use("/", Router);

app.use("/signup", SignUpRouter);
app.use("/", SearchBarRouter);
app.use("/", hosRouter);
app.use("/", clinRouter);


// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});

module.exports = { app };
