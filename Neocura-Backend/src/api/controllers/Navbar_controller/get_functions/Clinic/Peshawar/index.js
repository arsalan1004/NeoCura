const { clinQuery } = require("../Query_Function/function.js");

const peshclin = async () => {
  const hospitals = await clinQuery("Peshawar");
  return hospitals;
};

module.exports = { peshclin };
