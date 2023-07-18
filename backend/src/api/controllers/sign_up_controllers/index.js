
//Doctor SignUp API
const signUpDoctor = async (request, response) => {
    const data=request.body;
    console.log(data.clinicInfo[0].clinicTimings)
    //     try {
//     // Get Doctor Details
//     const docName = await getDocDetails(request);

//     // Get Doctor Education
//     const docEdu = await getDocEdu(request);

//     // Get Doctor Specialization
//     const docSpecs = await getDocSpecs(request);

//     // Get Doctor Languages
//     const docLangs = await getDocLangs(request);

//     // Get Health Condtions which doctor treats
//     const docConds = await getDocConditions(request);

//     let responseData = {
//       docId: docName[0].docId,
//       name: docName[0].name,
//       experience: docName[0].experience,
//       waitTime: docName[0].waitTime,
//       isPlatinum: docName[0].isPlatinum,
//       docEdu,
//       specialization: docSpecs,
//       languagesSpoken: docLangs,
//       conditionsTreated: docConds,
//     };

//     response.status(200).json(responseData);
//   } catch (error) {
//     console.log(error);
//   }
};


//Patient SignUp API
const signUpPatient = async (request, response) => {
    const data=req.body;
    // try {
    // Get Doctor Details
//     const docName = await getDocDetails(request);

//     // Get Doctor Education
//     const docEdu = await getDocEdu(request);

//     // Get Doctor Specialization
//     const docSpecs = await getDocSpecs(request);

//     // Get Doctor Languages
//     const docLangs = await getDocLangs(request);

//     // Get Health Condtions which doctor treats
//     const docConds = await getDocConditions(request);

//     let responseData = {
//       docId: docName[0].docId,
//       name: docName[0].name,
//       experience: docName[0].experience,
//       waitTime: docName[0].waitTime,
//       isPlatinum: docName[0].isPlatinum,
//       docEdu,
//       specialization: docSpecs,
//       languagesSpoken: docLangs,
//       conditionsTreated: docConds,
//     };

//     response.status(200).json(responseData);
//   } catch (error) {
//     console.log(error);
//   }
};

module.exports = { signUpDoctor,signUpPatient };
