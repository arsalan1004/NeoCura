const { database } = require("../../../../../config/db_setup.js");
const { getSpecId } = require("../get_specs/index.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");

const getDocIds = async (Request) => {
  const specId = await getSpecId(Request);

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "docId" FROM public."DocSpeciality" WHERE "spId" = '${specId}'`,
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

module.exports = { getDocIds };
