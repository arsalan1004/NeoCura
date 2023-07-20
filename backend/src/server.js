// Initialize Express App
const express = require("express");
const app = express();

//Requiring Cors for access-Control-Allow-Origin
const cors = require("cors");

// Require Router
const { Router } = require("./api/routes/DocList_Route/doc_route.js");
const { BlogRouter } = require("./api/routes/Blog_Route/blog_route.js");
const { SignUpRouter } = require("./api/routes/SignUp_Route/signup_Route.js");
const { SpecRouter } = require("./api/routes/allList_Routes/allListRoute.js");
const {
  SearchBarRouter,
} = require("./api/routes/SearchBar_Route/search_bar_route.js");
const { hosRouter } = require("./api/routes/HospitalList_Route/hosRoute.js");
const { clinRouter } = require("./api/routes/indvClinic_Route/clinicRoute.js");
const { DocRouter } = require("./api/routes/Indv_Route/indvDocRoute.js");
const { NavbarRouter } = require("./api/routes/NavBar_Route/navbarRoute.js");
const { LoginRouter } = require("./api/routes/Login_Route/Login_Route.js");
<<<<<<< HEAD
const { SpecRouter } = require("./api/routes/allList_Route/allListRoute.js");
=======
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b

// Require ENV variables
require("dotenv").config();

//Body parser midleware
app.use(express.json());

app.use(cors());

// Use Routes
app.use("/", NavbarRouter);
app.use("/", Router);
app.use("/", NavbarRouter);
app.use("/", DocRouter);
app.use("/blogs", BlogRouter);
<<<<<<< HEAD
app.use("/searchBarApi", SearchBarRouter);
app.use("/", SpecRouter);
=======
app.use('/searchBarApi',SearchBarRouter)
app.use("/", SpecRouter);
app.use('/login', LoginRouter);
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
app.use("/signup", SignUpRouter);
app.use("/", SearchBarRouter);
app.use("/", hosRouter);
app.use("/", clinRouter);
<<<<<<< HEAD
app.use("/login", LoginRouter);
=======
app.use("/", SpecRouter);
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b

// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});

module.exports = { app };
