const { database } = require("../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");

const getSatisfaction = async (docId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT
        ROUND((((COUNT(*) FILTER (WHERE dr."satisfaction" = 'true'))::decimal / COUNT(*)) * 100), 1)satisfaction_percentage
      FROM
        public."Doctor" d
        INNER JOIN public."DoctorReviews" dr ON d."docId" = dr."docId"
      WHERE d."docId" = '${docId}'
      GROUP BY
        d."docId"`,
      (error, result) => {
        if (!error) {
          if (result.rows[0] == undefined) {
            resolve("0");
          } else {
            resolve(result.rows[0].satisfaction_percentage);
          }
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getSatisfaction };
