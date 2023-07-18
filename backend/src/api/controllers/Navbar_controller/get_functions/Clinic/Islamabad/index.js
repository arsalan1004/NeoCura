const { clinQuery } = require("../Query_Function/function.js");

const islclin = async () => {
  const hospitals = await clinQuery("Islamabad");
  return hospitals;
};

module.exports = { islclin };
