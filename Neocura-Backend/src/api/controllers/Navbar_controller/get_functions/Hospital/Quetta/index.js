const { hosQuery } = require("../Query_Function/function.js");

const quetHos = async () => {
  const hospitals = await hosQuery("Quetta");
  return hospitals;
};

module.exports = { quetHos };
