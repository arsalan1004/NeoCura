const {database} = require('../../../../../../config/db_setup.js');

const getInfo = (branch) => {
  let info = {};
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT h."name", hb."street" || ', ' || hb."city" AS "location", "postalCode", "email"
            FROM public."HospitalBranch" hb
            JOIN public."Hospital" h ON h."hospitalId" = hb."hospitalId" WHERE hb."hosBranchId" = '${branch}'`,
      (error, result) => {
        if (!error) {
          info.name = result.rows[0].name;
          info.location = result.rows[0].location;
          info.postalCode = result.rows[0].postalCode;
          info.email = result.rows[0].email;
          resolve(info);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getInfo };
