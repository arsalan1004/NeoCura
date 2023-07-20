<<<<<<< HEAD
const { docDetails } = require("./get_functions/doc_detials");
=======
const { docDetails } = require("./get_functions/doc_details");
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b

const getLoginData = async (request, response) => {
  //   const email = request.body.email;
  //   const password = request.body.password;
  try {
<<<<<<< HEAD
    const doctor = await docDetails(request.body);
    response.status(200).json(doctor);
  } catch (error) {
    response.status(200).json(doctor);
  }
};

module.exports = { getLoginData };
=======
    let result = await docDetails(request.body);
    
    response.status(200).json(result);
  } catch (error) {
    response.status(300).json(error);
  }
};

module.exports = { getLoginData };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
