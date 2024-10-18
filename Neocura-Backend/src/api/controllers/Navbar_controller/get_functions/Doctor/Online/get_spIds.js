const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");

const getSpIds = async () => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT DISTINCT s."spId" FROM public."DocSpeciality" s JOIN public."PlatinumDoctor" pd
      ON s."docId" = pd."docId"`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(list_convert(result.rows));
        }
      }
    );
  });
};
module.exports = { getSpIds };
