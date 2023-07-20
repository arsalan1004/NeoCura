const { getTreatsDta } = require("./getAllTreats.js");

const getAllTreats = async () => {
  const treatList = await getTreatsDta();

  return treatList;
};

<<<<<<< HEAD
module.exports = { getAllTreats };
=======
module.exports = { getAllTreats };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
