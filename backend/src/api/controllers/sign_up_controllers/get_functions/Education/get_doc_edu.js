const { database } = require("../../../../../config/db_setup.js");

const getDocEdu = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "eduDegree", "eduUniversity", "eduCity", "yearOfQualification" FROM public."Education" WHERE "docId" = '${request.params.id}'`,
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
