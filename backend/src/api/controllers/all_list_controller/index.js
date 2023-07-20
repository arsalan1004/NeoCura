const { getAllConds } = require("./condList/condList.js");
const { getAllSpecs } = require("./specList/specList.js");
const { getAllTreats } = require("./treatList/treatList.js");

const displayAllList = async (Request, Response) => {
  let responseData;
  if (Request.params.identifier == "Speciality") {
    responseData = await getAllSpecs();
  } else if (Request.params.identifier == "Condition") {
    responseData = await getAllConds();
  } else if (Request.params.identifier == "Treatment") {
    responseData = await getAllTreats();
  }

  return Response.status(200).json(responseData);
};

module.exports = { displayAllList };
