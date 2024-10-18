const { getHospitals } = require("./get_functions/Hospital/index.js");
const { getClinics } = require("./get_functions/Clinic/index.js");
const { getDoctor } = require("./get_functions/Doctor/index.js");

const getNavData = async (Request, Response) => {
  console.log("In nav data");
  const hospital = await getHospitals();
  const clinic = await getClinics();
  const doctor = await getDoctor();

  const responseData = {
    hospital,
    clinic,
    doctor,
  };

  Response.status(200).json(responseData);
};

module.exports = { getNavData };
