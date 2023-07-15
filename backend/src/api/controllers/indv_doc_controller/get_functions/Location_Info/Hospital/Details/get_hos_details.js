const { getTimetable } = require("./Timetable/get_Timetable.js");
const { getInfo } = require("./name_loc/get_info.js");

const getDetails = async (branch, docId) => {
  const hosNameLoc = await getInfo(branch);
  const timetable = await getTimetable(branch, docId);

  const result = {
    name: hosNameLoc.name,
    location: hosNameLoc.location,
    timetable: timetable[0],
  };

  return result;
};
module.exports = { getDetails };
