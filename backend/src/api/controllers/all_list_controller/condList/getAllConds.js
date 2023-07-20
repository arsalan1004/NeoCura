const { database } = require("../../../../config/db_setup.js");

const getCondsDta = async () => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT hc."conditionName" AS "name", COUNT(ds."docId") AS noOfDr
          FROM public."HealthCondition" hc
          JOIN public."HealthConSpec" hcs ON hcs."conId" = hc."conId"
          JOIN public."DocSpeciality" ds ON hcs."spId" = ds."spId"
          GROUP BY hc."conditionName" ORDER BY hc."conditionName"`,
      (err, results) => {
        if (err) reject(err);
        resolve(results.rows);
      }
    );
  });
};

module.exports = { getCondsDta };