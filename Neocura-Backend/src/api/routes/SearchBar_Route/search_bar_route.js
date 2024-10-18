const express = require("express");
const SearchBarRouter = express.Router();
const { getSearchBarData } = require("../../controllers/search_bar_controllers/index.js");

SearchBarRouter.get("/searchBarApi", getSearchBarData);

module.exports = { SearchBarRouter };
