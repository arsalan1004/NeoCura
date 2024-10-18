const express = require("express");
const SignUpRouter = express.Router();
const { signUpDoctor, signUpPatient } = require("../../controllers/sign_up_controllers/index.js");

//Doctor SignUp Routes
SignUpRouter.post("/doctor", signUpDoctor);

//Patient SignUp Routes
SignUpRouter.post("/patient", signUpPatient);

module.exports = { SignUpRouter };
