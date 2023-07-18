const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");
const { getSpIds } = require("./get_spIds.js");

const getOnline = async () => {
  const spIds = await getSpIds();
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT 'Online ' || "specialityName" FROM public."Speciality" WHERE "spId" IN (${spIds}) LIMIT 10`,
      (err, res) => {
        if (err) reject(err);
        resolve(list_convert(res.rows));
      }
    );
  });
};

module.exports = { getOnline };
