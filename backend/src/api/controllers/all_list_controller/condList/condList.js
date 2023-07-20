const { getCondsDta } = require("./getAllConds.js");

const getAllConds = async () => {
  const condList = await getCondsDta();

  return condList;
};

<<<<<<< HEAD
module.exports = { getAllConds };
=======
module.exports = { getAllConds };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
