const { getTreatsDta } = require("./getAllTreats.js");

const getAllTreats = async () => {
  const treatList = await getTreatsDta();

  return treatList;
};

module.exports = { getAllTreats };