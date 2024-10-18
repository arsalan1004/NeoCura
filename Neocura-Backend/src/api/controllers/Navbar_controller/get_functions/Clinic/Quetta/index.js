const { clinQuery } = require("../Query_Function/function.js");

const quetclin = async () => {
  const hospitals = await clinQuery("Quetta");
  return hospitals;
};

module.exports = { quetclin };
