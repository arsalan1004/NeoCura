const { database } = require("../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");

const getOnlineDocIds = async (city) => {

  // const spec1 = spec.split('-').join(' ');
// ADD SPLITTING LOGIC
//SPLIT SLICE to remove first index and then join

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "docId" FROM public."Doctor" WHERE "isPlatinum" = 'true' AND "city" = '${city}' ORDER BY "docId"`,
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

module.exports = { getOnlineDocIds };
