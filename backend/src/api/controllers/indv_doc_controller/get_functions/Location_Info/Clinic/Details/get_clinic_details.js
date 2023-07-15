const { getTimetable } = require("./Timetable/get_Timetable.js");
const { getInfo } = require("./name_loc/get_info.js");

const getDetails = async (id, docId) => {
  const clinNameLoc = await getInfo(id);
  const timetable = await getTimetable(id, docId);

  const result = {
    name: clinNameLoc.name,
    location: clinNameLoc.location,
    timetable: timetable[0],
  };

  return result;
};
module.exports = { getDetails };
