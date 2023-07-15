const { database } = require("../../../../../config/db_setup.js");
const { fetchReviews } = require("./fetch_data.js");

const getReviews = async (id) => {
  const reviews = await fetchReviews(id);

  return reviews;
};

module.exports = { getReviews };
