const { getDocDetails } = require("./get_functions/Doctor_Details/get_doc.js");
const { getDocEdu } = require("./get_functions/Education/get_doc_edu.js");
const { getDocSpecs } = require("./get_functions/Specialities/get_doc_sp.js");
const { getDocLangs } = require("./get_functions/Language/get_doc_lang.js");
const {
  getDocConditions,
} = require("./get_functions/Health_Conditions/get_doc_conds.js");
const {
  getHosInfo,
} = require("./get_functions/Location_Info/Hospital/index.js");
const { getReviews } = require("./get_functions/Reviews/get_reviews.js");
const {
  getClinInfo,
} = require("./get_functions/Location_Info/Clinic/index.js");
const {
  getOnlineConsultation,
} = require("./get_functions/Location_Info/OnlineConsultation/index.js");
const {
  getSatisfaction,
} = require("./get_functions/Doctor_Details/get_satisfaction.js");

const getDoctors = async (id) => {
  try {
    // Get Doctor Details
    const docName = await getDocDetails(id);

    // Get Doctor Satisfaction
    const docSatisfaction = await getSatisfaction(id);

    // Get Doctor Education

    const docEdu = await getDocEdu(id);

    // Get Doctor Specialization

    const docSpecs = await getDocSpecs(id);

    // Get Doctor Languages

    const docLangs = await getDocLangs(id);

    // Get Health Condtions which doctor treats
    const docConds = await getDocConditions(id);

    // Get Doctor Reviews
    const docReviews = await getReviews(id);

    // Get Hospital Info
    const hospitalInfo = await getHosInfo(id);

    // Get Clinic Info
    const clinicInfo = await getClinInfo(id);

    // GET Online Consultation
    const onConsult = await getOnlineConsultation(id);

    let docDetails = {
      docId: docName[0].docId,
      name: docName[0].name,
      gender: docName[0].gender,
      gender: docName[0].gender,
      experience: docName[0].experience,
      waitTime: docName[0].waitTime,
      isPlatinum: docName[0].isPlatinum,
      docImg: docName[0].docImg,
      education: docEdu,
      specialization: docSpecs,
      languagesSpoken: docLangs,
      conditionsTreated: docConds,
      satisfiedPatients: docSatisfaction,
    };

    let locationDetails = {
      docId: id,
      onlineConsultation: onConsult,
      hospital: hospitalInfo,
      clinic: clinicInfo,
    };

    let responseData = {
      doctorInfo: docDetails,
      locInfo: locationDetails,
      userReviews: docReviews,
    };
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDoctors };
