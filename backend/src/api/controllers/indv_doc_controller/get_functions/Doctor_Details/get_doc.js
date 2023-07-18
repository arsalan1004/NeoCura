const { database } = require("../../../../../config/db_setup.js");

const getDocDetails = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "docId", "name", "gender", "docImg", "experience", "waitTime", "isPlatinum" FROM public."Doctor" WHERE "docId" = '${id}'`,
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
