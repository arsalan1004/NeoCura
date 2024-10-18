const { database } = require("../../../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../../../helpers/List_Converter/to_list.js");

const getTtId = async (branch, docId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "ttId" FROM public."DocsAvailability" WHERE "hosBranchId" = '${branch}' AND "docId" = '${docId}'`,
      (err, result) => {
        if (!err) {
          resolve(list_convert(result.rows));
        } else {
          reject(err);
        }
      }
    );
  });
};
module.exports = { getTtId };
