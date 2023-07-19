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
<<<<<<< HEAD
          if (result.rows[0] == undefined) {
            console.log("in error");
            resolve("0");
          } else {
            //console.log(result.rows[0]);
            resolve(result.rows[0].satisfaction_percentage);
          }
=======
          console.log(result.rows);
          resolve(result.rows[0].satisfaction_percentage);
>>>>>>> 294a1700a409ea8873252b7906d5a15e40ec6bb6
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getSatisfaction };
