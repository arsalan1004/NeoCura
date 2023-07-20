const { getAllConds } = require("./condList/condList.js");
const { getAllOnline } = require("./onlineList/onlineList.js");
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
  else if (Request.params.identifier == "Online") {
    responseData = await getAllOnline();
  }

  return Response.status(200).json(responseData);
};

<<<<<<< HEAD
module.exports = { displayAllList };
=======
module.exports = { displayAllList };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
