const { database } = require("../../../../../config/db_setup.js");

const fetchReviews = async (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "desc", "reviewDateTime", "consultTime", "waitTime", "satisfaction",
        "diagnosis","staffBehaviour" FROM public."DoctorReviews" WHERE "docId" = '${id}'`,
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

module.exports = { fetchReviews };
