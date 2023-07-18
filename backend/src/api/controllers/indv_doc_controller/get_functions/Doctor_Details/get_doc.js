const { database } = require("../../../../../config/db_setup.js");

const getDocDetails = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "docId", "name", "experience", "waitTime", "isPlatinum" FROM public."Doctor" WHERE "docId" = '${request.params.id}'`,
      (error, result) => {
        if (!error) {
          resolve(result.rows);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getDocDetails };
