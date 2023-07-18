const { database } = require("../../../../../../../../config/db_setup.js");

const checkStatus = async (docId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "isPlatinum" FROM public."Doctor" WHERE "docId" = '${docId}'`,
      (error, result) => {
        if (!error) {
          resolve(result.rows[0].isPlatinum);
        } else {
          reject(error);
        }
      }
    );
  });
};
module.exports = { checkStatus };
