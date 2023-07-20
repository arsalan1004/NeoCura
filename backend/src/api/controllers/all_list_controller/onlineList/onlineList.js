const { getOnlineDta } = require("./getAllOnline");

const getAllOnline = async () => {
  const onlineList = await getOnlineDta();

  return onlineList;
};

<<<<<<< HEAD
module.exports = { getAllOnline };
=======
module.exports = { getAllOnline };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
