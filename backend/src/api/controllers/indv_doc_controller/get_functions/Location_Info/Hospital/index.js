const { getHosBranches } = require("./Branches/getHosBranches.js");
const { getDetails } = require("./Details/get_hos_details.js");

const getHosInfo = async (docId) => {
  const hosBranchList = await getHosBranches(docId);

  const hosDetails = await Promise.all(
    hosBranchList.map(async (branch) => {
      return await getDetails(branch, docId);
    })
  );

  return hosDetails;
};

module.exports = { getHosInfo };
