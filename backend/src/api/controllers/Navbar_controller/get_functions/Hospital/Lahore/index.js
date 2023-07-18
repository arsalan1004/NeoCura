const { hosQuery } = require("../Query_Function/function.js");

const lahHos = async () => {
  const hospitals = await hosQuery("Lahore");
  return hospitals;
};

module.exports = { lahHos };
