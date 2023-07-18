const express = require("express");
const NavbarRouter = express.Router();
const { getNavData } = require("../../controllers/Navbar_controller/index.js");

NavbarRouter.get("/", getNavData);

module.exports = { NavbarRouter };
