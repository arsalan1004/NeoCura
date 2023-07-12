const { getDocDetails } = require("./get_functions/Doctor_Details/get_doc.js");
const { getDocEdu } = require("./get_functions/Education/get_doc_edu.js");
const {
  getDocSpecs,
  spec_list,
} = require("./get_functions/Specialities/get_doc_sp.js");
const { getDocLangs } = require("./get_functions/Language/get_doc_lang.js");
const {
  getDocConditions,
} = require("./get_functions/Health_Conditions/get_doc_conds.js");

const getDoctors = async (request, response) => {
  try {
    // Get Doctor Details
    const docName = await getDocDetails(request);

    // Get Doctor Education
    const docEdu = await getDocEdu(request);

    // Get Doctor Specialization
    const docSpecs = await getDocSpecs(request);

    // Get Doctor Languages
    const docLangs = await getDocLangs(request);

    // Get Health Condtions which doctor treats
    const docConds = await getDocConditions(request);

    let responseData = {
      docId: docName[0].docId,
      name: docName[0].name,
      experience: docName[0].experience,
      waitTime: docName[0].waitTime,
      isPlatinum: docName[0].isPlatinum,
      docEdu,
      specialization: docSpecs,
      languagesSpoken: docLangs,
      conditionsTreated: docConds,
    };

    response.status(200).json(responseData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDoctors };
