const express = require("express");
const NavbarRouter = express.Router();
const { getNavData } = require("../../controllers/Navbar_controller/index.js");

console.log('route hitted');
NavbarRouter.get("/", getNavData);

module.exports = { NavbarRouter };
