const { getTimetable } = require("./Timetable/get_Timetable.js");
const { getInfo } = require("./name_loc/get_info.js");
const { getFees } = require("./Fees/get_Fees.js");

const getDetails = async (id, docId) => {
  const clinNameLoc = await getInfo(id);
  const clinFees = await getFees(id, docId);
  const timetable = await getTimetable(id, docId);

  const result = {
    name: clinNameLoc.name,
    location: clinNameLoc.location,
    fees: clinFees,
    timetable: timetable[0],
  };

  return result;
};
module.exports = { getDetails };
