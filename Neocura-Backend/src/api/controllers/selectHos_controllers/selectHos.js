const { getHospitals } = require("../indv_hospital_controller/index.js");

const selectHos = async (Request, Response) => {

  const response = await getHospitals(Request.params.id);
  Response.status(200).json(response);
};

module.exports = { selectHos };
