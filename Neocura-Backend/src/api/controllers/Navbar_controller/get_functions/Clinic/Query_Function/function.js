const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");

const clinQuery = async (clinCity) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT DISTINCT "name" FROM public."Clinic" WHERE "city" = '${clinCity}'`,
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

module.exports = { clinQuery };
