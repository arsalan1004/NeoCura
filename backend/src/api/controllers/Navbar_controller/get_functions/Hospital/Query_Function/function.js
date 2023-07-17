const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");

const hosQuery = async (hosCity) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT DISTINCT h."name" FROM public."Hospital" h JOIN public."HospitalBranch" hb
        ON h."hospitalId" = hb."hospitalId" WHERE hb."city" = '${hosCity}'`,
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

module.exports = { hosQuery };
