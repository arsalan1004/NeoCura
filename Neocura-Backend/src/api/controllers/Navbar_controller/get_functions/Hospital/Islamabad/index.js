const { hosQuery } = require("../Query_Function/function.js");

const islHos = async () => {
  const hospitals = await hosQuery("Islamabad");
  return hospitals;
};

module.exports = { islHos };
