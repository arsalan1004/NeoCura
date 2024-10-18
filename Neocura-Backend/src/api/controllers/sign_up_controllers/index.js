const { postDocDetails } = require("./get_functions/Doctor_Details/post_doc");
const { PostPatDetails } = require("./get_functions/Patient_Details/pat_details.js");

//Doctor SignUp API
const signUpDoctor = async (request, response) => {
    const data=request.body;
        try {
    // Post Doc Details 
    const docName = await postDocDetails(data);

    // Post Doctor Education
    // const docEdu = await getDocEdu(request);

    // // Post Doctor Specialization
    // const docSpecs = await getDocSpecs(request);

    // // Post Doctor Languages
    // const docLangs = await getDocLangs(request);

    // // Post Health Condtions which doctor treats
    // const docConds = await getDocConditions(request);

    response.status(200).json(docName);
  } catch (error) {
    console.log(error);
  }
};


//Patient SignUp API
const signUpPatient = async (request, response) => {
    const data=request.body;
    // try {
    // Post Patient Details
   const patDetails = await PostPatDetails(request.body);

//     
      console.log(data)
//     response.status(200).json(responseData);
//   } catch (error) {
//     console.log(error);
//   }
};

module.exports = { signUpDoctor,signUpPatient };