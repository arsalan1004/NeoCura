const express = require("express");
const {getBlogs} = require('../../controllers/blog_controllers/index.js')
const BlogRouter = express.Router();

BlogRouter.get("/", getBlogs);

module.exports = { BlogRouter };
