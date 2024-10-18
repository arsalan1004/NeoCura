const express = require("express");
const getDoctorByIdRouter = express.Router();

const {
  getDoctorByIdIdController,
} = require("../../controllers/GetDoctorById/index.js");

getDoctorByIdRouter.get("/:id", getDoctorByIdIdController);

module.exports = { getDoctorByIdRouter };
