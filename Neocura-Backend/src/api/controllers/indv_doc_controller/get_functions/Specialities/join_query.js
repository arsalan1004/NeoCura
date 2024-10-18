const { database } = require("../../../../../config/db_setup.js");

let specIdObj = [];

const getSpecId = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "spId" FROM public."DocSpeciality" WHERE "docId" = '${id}'`,
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
