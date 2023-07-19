const { docDetails } = require("./get_functions/doc_detials");

const getLoginData = async (request, response) => {
  //   const email = request.body.email;
  //   const password = request.body.password;
  try {
    const doctor = await docDetails(request.body);
    response.status(200).json(doctor);
  } catch (error) {
    response.status(200).json(doctor);
  }
};

module.exports = { getLoginData };
