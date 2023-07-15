const { getTimetable } = require("./Timetable/get_Timetable.js");
const { getConsultId } = require("./Id/get_consult_id.js");

const getDetails = async (docId) => {
  const consultId = await getConsultId(docId);
  console.log(consultId);
  const timetable = await getTimetable(consultId, docId);

  const result = {
    name: "Online Video Consultation",
    timetable: timetable[0],
  };

  return result;
};
module.exports = { getDetails };
