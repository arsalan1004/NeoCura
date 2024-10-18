const { getCondition } = require("./get_functions/Condition_Details/get_cond");
const { getDoctors } = require("./get_functions/Doctor_Details/get_doc");
const { getHospital } = require("./get_functions/Hospitals_Details/get_hosp");
const {
  getServices,
} = require("./get_functions/Services_Details copy/get_services");
const {
  getSpeciality,
} = require("./get_functions/Speciality_Details/get_speciality");

const getSearchBarData = async (request, response) => {
  try {
    //  Get Doctors
    const docData = await getDoctors(request);
    //   Get Specialities
    const specData = await getSpeciality(request);

    // // Get Conditions
    const condData = await getCondition(request);

    // // Get Services
    const servData = await getServices(request);

    // // Get Hospitals
    const hospData = await getHospital(request);

    // // Get Health Condtions which doctor treats
    // const docConds = await getDocConditions(request);

    let responseData = [
      ...specData,
      ...condData,
      ...docData,
      ...servData,
      ...hospData,
    ];

    response.status(200).json(responseData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSearchBarData };
