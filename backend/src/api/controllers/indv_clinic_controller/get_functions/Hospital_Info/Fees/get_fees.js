const { database } = require("../../../../../../config/db_setup.js");

const getFees = async (clinId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT f."feeAmount" FROM public."ConsultationFees" f JOIN public."DocsAvailability" da
        ON f."availId" = da."availId" WHERE da."clinicId" = '${clinId}'`,
      (error, result) => {
        if (!error) {
          resolve(result.rows[0].feeAmount);
        } else {
          reject(error);
        }
      }
    );
  });
};

<<<<<<< HEAD
module.exports = { getFees };
=======
module.exports = { getFees };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
