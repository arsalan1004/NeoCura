const { database } = require("../../../../../../config/db_setup.js");

const getHosId = async (hosName) => {
  console.log(hosName);
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "hospitalId" FROM public."Hospital" WHERE "name" = '${hosName}'`,
      (err, result) => {
        if (err) reject(err);
        console.log(result.rows);
        resolve(result.rows[0].hospitalId);
      }
    );
  });
};

module.exports = { getHosId };
