const { getTimetable } = require("./Timetable/get_Timetable.js");
const { getConsultId } = require("./Id/get_consult_id.js");
const { getFees } = require("./Fees/get_fees.js");

const getDetails = async (docId) => {
  const consultId = await getConsultId(docId);
  const feeAmount = await getFees(consultId, docId);
  const timetable = await getTimetable(consultId, docId);

  const result = {
    name: "Online Video Consultation",
    fees: feeAmount,
    timetable: timetable[0],
  };

  return result;
};
module.exports = { getDetails };
