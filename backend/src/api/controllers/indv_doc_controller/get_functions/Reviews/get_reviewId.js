const { database } = require("../../../../../config/db_setup.js");
const {list_convert}=  require('../../../../helpers/List_Converter/to_list.js')

const getReviewId = async (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "reviewId" FROM public."DoctorReviews" WHERE "docId" = '${id}'`,
      (error, result) => {
        if (!error) {
          resolve(list_convert(result.rows));
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getReviewId };
