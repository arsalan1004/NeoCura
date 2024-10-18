const { clinQuery } = require("../Query_Function/function.js");

const karclin = async () => {
  const hospitals = await clinQuery("Karachi");
  return hospitals;
};

module.exports = { karclin };
