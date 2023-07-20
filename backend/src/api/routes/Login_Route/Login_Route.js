const express = require("express");
const {
  getLoginData,
} = require("../../controllers/login_controllers/index.js");
const LoginRouter = express.Router();

<<<<<<< HEAD
LoginRouter.get("/", getLoginData);

module.exports = { LoginRouter };
=======
LoginRouter.post("/", getLoginData);

module.exports = { LoginRouter };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
