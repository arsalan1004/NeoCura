const { getTimetable } = require("./Timetable/get_Timetable.js");
const { getInfo } = require("./name_loc/get_info.js");
const { getFees } = require("./Fees/get_fees.js");

const getDetails = async (branch, docId) => {
  const hosNameLoc = await getInfo(branch);
  const feeAmount = await getFees(branch, docId);
  const timetable = await getTimetable(branch, docId);

  const result = {
    name: hosNameLoc.name,
    location: hosNameLoc.location,
    fees: feeAmount,
    timetable: timetable[0],
  };

  return result;
};
module.exports = { getDetails };
