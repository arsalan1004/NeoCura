const { getSpecsData } = require("./getAllSpecs.js");

const getAllSpecs = async (Request, Response) => {
  const allSpecs = await getSpecsData();
  console.log(allSpecs);
  Response.status(200).json(allSpecs);
};

module.exports = { getAllSpecs };
