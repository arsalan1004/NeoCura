const { database } = require("../../../../../../../../config/db_setup.js");

const getFees = async (branch, docId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT f."feeAmount" FROM public."ConsultationFees" f JOIN public."DocsAvailability" da
        ON f."availId" = da."availId" WHERE da."docId" = '${docId}' AND da."hosBranchId" = '${branch}'`,
      (error, result) => {
        if (result.rows[0] == undefined) {
          resolve("0");
        } else {
          resolve(result.rows[0].feeAmount);
        }
      }
    );
  });
};

module.exports = { getFees };
