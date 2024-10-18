const { database } = require("../../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../../helpers/List_Converter/to_list.js");

const getTreats = async () => {
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT "serviceName" FROM public."Services" LIMIT 10',
      (err, result) => {
        if (err) reject(err);
        resolve(list_convert(result.rows));
      }
    );
  });
};

module.exports = { getTreats };
