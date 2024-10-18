const express = require("express");
const {
  selectDoc,
} = require("../../controllers/selectDoc_controllers/selectDoc.js");
const DocRouter = express.Router();

DocRouter.get("/Doctor/Speciality/:speciality/:city/:id", selectDoc);

module.exports = { DocRouter };
