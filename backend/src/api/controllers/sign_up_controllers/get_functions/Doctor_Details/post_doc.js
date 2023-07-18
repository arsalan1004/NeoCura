const { database } = require("../../../../../config/db_setup.js");

const postDocDetails = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `INSERT INTO public."Doctor" (name, gender, "phoneNumber", email, city, street, "postalCode", "isPMCCertified", "isPlatinum")
      VALUES (
        '${request.personalInfo.firstName} ${request.personalInfo.lastName}',
        '${request.personalInfo.gender}',
        '${request.personalInfo.phoneNumber}',
        '${request.personalInfo.email}',
        '${request.personalInfo.city}',
        '${request.personalInfo.streetAddress}',
        '${request.personalInfo.postalCode}',
        ${request.educationInfo.pmcNo ? 'true' : 'false'},
        ${request.professionInfo.platMember === 'YES' ? 'true' : 'false'}
      )
      RETURNING "docId";
      `,
      // `SELECT "docId", "name", "experience", "waitTime", "isPlatinum" FROM public."Doctor" WHERE "docId" = '${request.params.id}'`,
      (error, result) => {
        if (!error) {
          resolve(result.rows[0].docId);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { postDocDetails };
