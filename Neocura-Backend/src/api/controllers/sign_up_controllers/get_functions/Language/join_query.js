const { database } = require("../../../../../config/db_setup.js");

let langObj = [];

const getLangIds = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "langId" FROM public."DocLanguage" WHERE "docId" = '${request.params.id}'`,
      (error, result) => {
        if (!error) {
          langObj = result.rows;
          resolve(langObj);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getLangIds };
