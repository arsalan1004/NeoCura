const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");

const getConds = async () => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conditionName" FROM public."HealthCondition" LIMIT 10`,
      (err, res) => {
        if (!err) {
          resolve(list_convert(res.rows));
        } else {
          reject(err);
        }
      }
    );
  });
};

module.exports = { getConds };
