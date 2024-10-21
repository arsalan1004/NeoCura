const { addDocReview } = require("../../controllers/doc_reviews/addDocReview");

const reviewRouter = require("express").Router();

reviewRouter.post("/addDocReview", addDocReview);

module.exports = { reviewRouter };
