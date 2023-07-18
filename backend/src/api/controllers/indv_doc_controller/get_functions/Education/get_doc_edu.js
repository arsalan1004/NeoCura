const { database } = require("../../../../../config/db_setup.js");

const getDocEdu = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "eduDegree", "eduUniversity", "eduCity", "yearOfQualification" FROM public."Education" WHERE "docId" = '${id}'`,
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

module.exports = { getDocEdu };
