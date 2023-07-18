const express = require("express");
const SearchBarRouter = express.Router();
const { getSearchBarData } = require("../../controllers/search_bar_controllers/index.js");

console.log('in bar route');
SearchBarRouter.get("/searchBarApi", getSearchBarData);
console.log('out of bar route');

module.exports = { SearchBarRouter };
