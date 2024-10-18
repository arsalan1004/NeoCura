const express = require("express");
const getPatientByIdRouter = express.Router();

const {
  getPatientByIdIdController,
} = require("../../controllers/GetPatientById/index.js");

getPatientByIdRouter.get("/:id", getPatientByIdIdController);

module.exports = { getPatientByIdRouter };
