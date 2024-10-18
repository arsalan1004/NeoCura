const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");

const getClinId = async (clinName, city) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "clinicId" FROM public."Clinic" WHERE "name" = '${clinName}' AND "city" = '${city}'`,
      (err, result) => {
        if (err) reject(err);
        resolve(list_convert(result.rows));
      }
    );
  });
};

module.exports = { getClinId };