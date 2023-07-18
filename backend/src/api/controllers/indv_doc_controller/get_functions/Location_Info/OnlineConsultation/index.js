const { checkStatus } = require("./Details/Status/check_status.js");
const { getDetails } = require("./Details/get_consult_details.js");

const getOnlineConsultation = async (docId) => {
  const status = await checkStatus(docId);

  if (status) {
    const consultInfo = [];
    consultInfo.push(await getDetails(docId));
    return consultInfo;
  } else {
    return null;
  }
};

module.exports = { getOnlineConsultation };
