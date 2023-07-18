const { database } = require("../../../../../../../config/db_setup.js");
const { list_convert } = require("../../../../../../helpers/index.js");

const getHosBranches = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "hosBranchId" FROM public."DocHosBranch" WHERE "docId" = ${id}`,
      (error, result) => {
        if (!error) {
          resolve(list_convert(result.rows));
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getHosBranches };
