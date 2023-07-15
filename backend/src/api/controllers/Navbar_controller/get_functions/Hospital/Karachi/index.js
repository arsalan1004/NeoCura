const { hosQuery } = require("../Query_Function/function.js");

const karHos = async () => {
  const hospitals = await hosQuery("Karachi");
  return hospitals;
};

module.exports = { karHos };
