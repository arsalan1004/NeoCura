const e = require("express");
const { database } = require("../../../../../config/db_setup.js");

const getCondId = async (cond) => {
<<<<<<< HEAD
  let newlist = cond.split("-");
  let con = newlist.join(" ");
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conId" FROM public."HealthCondition" WHERE "conditionName" = '${con}'`,
=======

  const cond1 = cond.split('-').join(' ');

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conId" FROM public."HealthCondition" WHERE "conditionName" = '${cond1}'`,
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
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
