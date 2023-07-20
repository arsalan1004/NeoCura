const { getClinId } = require("./Hospital_Info/Hos_Details/getId.js");
const { getClinic } = require("./Hospital_Info/Hos_Details/get_clinic.js");
const { getTimetable } = require("./Hospital_Info/Timetable/getTimetable.js");
const { getInfo } = require("./Hospital_Info/Hos_Details/getClinInfo.js");
const { getFees } = require("./Hospital_Info/Fees/get_fees.js");

const getClinInfo = async (clinName, city) => {
  const clinId = await getClinId(clinName, city);

  const clinDetails = await getClinic(clinId);

  const clinSpecificInfo = await Promise.all(
    clinId.map(async (id) => {
      const info = await getInfo(id);

      return {
        name: info.name,
        location: info.location,
        contactNumber: info.contactNumber,
        email: info.email,
        postalCode: info.postalCode,
        fees: await getFees(id),
        timetable: await getTimetable(id),
      };
    })
  );

  const combinedInfo = {
    clinicId: clinDetails[0].clinicId,
    name: clinDetails[0].name,
    averageFees: clinDetails[0].averageFees,
    branches: clinSpecificInfo,
  };

  return combinedInfo;
};

module.exports = { getClinInfo };