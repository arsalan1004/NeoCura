const express = require("express");
const Router = express.Router();
const {
  getDoctors,
} = require("../../controllers/indv_doc_controller/index.js");

Router.get("/:id", getDoctors);

module.exports = { Router };
