const { getSpecsData } = require("./getAllSpecs.js");

const getAllSpecs = async () => {
  const allSpecs = await getSpecsData();
  console.log(allSpecs);

  return allSpecs;
};

module.exports = { getAllSpecs };