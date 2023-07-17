const express = require("express");
const Router = express.Router();
const {
  getSpecDocs,
} = require("../../controllers/doc_list_controller/By_Speciality/index.js");
const {
  getCondDocs,
} = require("../../controllers/doc_list_controller/By_Condition/index.js");

Router.get("/Doctor/Speciality/:speciality/:city", getSpecDocs);

Router.get("/Doctor/Condition/:condition/:city", getCondDocs);
module.exports = { Router };
