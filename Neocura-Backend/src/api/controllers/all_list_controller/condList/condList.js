const { getCondsDta } = require("./getAllConds.js");

const getAllConds = async () => {
  const condList = await getCondsDta();

  return condList;
};

module.exports = { getAllConds };