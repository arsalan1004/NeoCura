const { getSpecsData } = require("./getAllSpecs.js");

const getAllSpecs = async () => {
  const allSpecs = await getSpecsData();
<<<<<<< HEAD
<<<<<<<< HEAD:backend/src/api/controllers/all_list_controller/specList/specList.js

  return allSpecs;
========
  console.log(allSpecs);
  Response.status(200).json(allSpecs);
>>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b:backend/src/api/controllers/specList_controllers/specList.js
};

module.exports = { getAllSpecs };
=======
  console.log(allSpecs);

  return allSpecs;
};

module.exports = { getAllSpecs };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
