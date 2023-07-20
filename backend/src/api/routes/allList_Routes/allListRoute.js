const express = require("express");
const SpecRouter = express.Router();

const {
  displayAllList,
} = require("../../controllers/all_list_controller/index.js");

SpecRouter.get("/CompleteList/Doctor/:identifier", displayAllList);

module.exports = { SpecRouter };