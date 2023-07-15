const express = require("express");
const Router = express.Router();
const {
  getDocList,
} = require("../../controllers/doc_list_controller/index.js");

Router.get("/", getNavData);

module.exports = { Router };
