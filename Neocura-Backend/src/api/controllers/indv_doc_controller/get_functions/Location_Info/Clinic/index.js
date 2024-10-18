const { getClinics } = require("./Details/id/get_id.js");
const { getDetails } = require("./Details/get_clinic_details.js");

const getClinInfo = async (docId) => {
  const clinicList = await getClinics(docId);

  const clinicDetails = await Promise.all(
    clinicList.map(async (id) => {
      return await getDetails(id, docId);
    })
  );

  return clinicDetails;
};

module.exports = { getClinInfo };
