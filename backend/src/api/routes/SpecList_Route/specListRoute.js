const express = require("express");
const SpecRouter = express.Router();

const {
  getAllSpecs,
} = require("../../controllers/specList_controllers/specList.js");

SpecRouter.get("/CompleteList/Speciality", getAllSpecs);

module.exports = { SpecRouter };
