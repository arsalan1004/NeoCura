const { clinQuery } = require("../Query_Function/function.js");

const lahclin = async () => {
  const hospitals = await clinQuery("Lahore");
  return hospitals;
};

module.exports = { lahclin };
