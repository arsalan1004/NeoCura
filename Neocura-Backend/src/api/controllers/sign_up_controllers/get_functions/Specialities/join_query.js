const { database } = require("../../../../../config/db_setup.js");

let specIdObj = [];

const getSpecId = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "spId" FROM public."DocSpeciality" WHERE "docId" = '${request.params.id}'`,
      (error, result) => {
        if (!error) {
          specIdObj = result.rows;
          resolve(specIdObj);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = {
  getSpecId,
};
