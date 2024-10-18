const { getOnlineDta } = require("./getAllOnline");

const getAllOnline = async () => {
  const onlineList = await getOnlineDta();

  return onlineList;
};

module.exports = { getAllOnline };