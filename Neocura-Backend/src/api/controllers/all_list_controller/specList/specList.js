const { getSpecsData } = require("./getAllSpecs.js");

const getAllSpecs = async () => {
  const allSpecs = await getSpecsData();

  return allSpecs;
};

module.exports = { getAllSpecs };
