const { database } = require("../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");
const { getDocIds } = require("./docIdList.js");

const finalList = async (Request) => {
  const docIds = await getDocIds(Request.params.speciality);
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "docId" FROM public."Doctor" WHERE "docId" IN (${docIds}) AND "city" = '${Request.params.city}'`,
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

module.exports = { finalList };
