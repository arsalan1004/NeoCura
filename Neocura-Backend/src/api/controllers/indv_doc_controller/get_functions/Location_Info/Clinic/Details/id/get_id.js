const { database } = require("../../../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../../../helpers/List_Converter/to_list.js");

const getClinics = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "clinicId" FROM public."DocClinic" WHERE "docId" = ${id}`,
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

module.exports = { getClinics };
