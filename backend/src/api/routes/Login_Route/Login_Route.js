const express = require("express");
const {
  getLoginData,
} = require("../../controllers/login_controllers/index.js");
const LoginRouter = express.Router();

LoginRouter.post("/", getLoginData);

module.exports = { LoginRouter };