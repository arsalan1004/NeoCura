const express = require("express");
const {
  getLoginData,
} = require("../../controllers/login_controllers/index.js");
const LoginRouter = express.Router();

LoginRouter.get("/", getLoginData);

module.exports = { LoginRouter };
