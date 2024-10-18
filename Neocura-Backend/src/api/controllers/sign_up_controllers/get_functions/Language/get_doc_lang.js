const { database } = require("../../../../../config/db_setup.js");
const { getLangIds } = require("./join_query.js");
const { list_convert } = require("../../../../helpers/index.js");

const getDocLangs = async (request) => {
  const langIdObj = await getLangIds(request);
  const lang_list = list_convert(langIdObj);

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "langName" FROM public."Language" WHERE "langId" IN (${lang_list})`,
      (error, result) => {
        if (!error) {
          rawLangs = result.rows;
          let list = rawLangs.map((lang) => lang.langName);
          resolve(list);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getDocLangs };
