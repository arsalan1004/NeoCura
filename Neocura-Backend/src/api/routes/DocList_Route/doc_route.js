const express = require("express");
const Router = express.Router();
const {
  getSpecDocs,
} = require("../../controllers/doc_list_controller/By_Speciality/index.js");
const {
  getCondDocs,
} = require("../../controllers/doc_list_controller/By_Condition/index.js");
const {
  getTreatDocs,
} = require("../../controllers/doc_list_controller/By_Treatments/index.js");
const {
  getOnlineDocs,
} = require("../../controllers/doc_list_controller/Online/index.js");


// Get by Speciality
Router.get("/Doctor/Speciality/:speciality/:city", getSpecDocs);

// Get by Condition
Router.get("/Doctor/Condition/:condition/:city", getCondDocs);

// Get by Treatments (Services)
Router.get("/Doctor/Treatment/:treatment/:city", getTreatDocs);

// Get Online
Router.get("/Doctor/Online/:city", getOnlineDocs);

module.exports = { Router };
