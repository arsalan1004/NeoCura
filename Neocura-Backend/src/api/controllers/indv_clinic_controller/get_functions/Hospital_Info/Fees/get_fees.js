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

module.exports = { getFees };