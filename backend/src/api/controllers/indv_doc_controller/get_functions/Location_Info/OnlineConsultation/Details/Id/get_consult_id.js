const { database } = require("../../../../../../../../config/db_setup.js");

const getConsultId = (docId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT hb."onlineConsultId"
      FROM public."OnlineConsultation" hb
      JOIN public."PlatinumDoctor" h ON h."platDocId" = hb."platDocId" WHERE h."docId" = '${docId}'`,
      (error, result) => {
        if (!error) {
          resolve(result.rows[0].onlineConsultId);
        } else {
          console.log("in error");
          console.log(result);
          reject(error);
        }
      }
    );
  });
};

module.exports = {
  getConsultId,
};
