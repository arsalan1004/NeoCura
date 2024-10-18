const { docDetails } = require("./get_functions/doc_details");

const getLoginData = async (request, response) => {
  //   const email = request.body.email;
  //   const password = request.body.password;
  try {
    let result = await docDetails(request.body);

    response.status(200).json(result);
  } catch (error) {
    response.status(300).json(error);
  }
};

module.exports = { getLoginData };
