const { hosQuery } = require("../Query_Function/function.js");

const peshHos = async () => {
  const hospitals = await hosQuery("Peshawar");
  return hospitals;
};

module.exports = { peshHos };
