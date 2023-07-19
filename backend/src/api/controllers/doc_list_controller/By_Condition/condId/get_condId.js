const e = require("express");
const { database } = require("../../../../../config/db_setup.js");

const getCondId = async (cond) => {

  const cond1 = cond.split('-').join(' ');

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conId" FROM public."HealthCondition" WHERE "conditionName" = '${cond1}'`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows[0].conId);
        }
      }
    );
  });
};

module.exports = {
  getCondId,
};
