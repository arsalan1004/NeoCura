const { database } = require("../../../../../../../../config/db_setup.js");

const getInfo = (branch) => {
  let info = {};
  console.log(branch);
  //console.log('in hospital');
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT h."name", hb."street" || ', ' || hb."city" AS "location"
            FROM public."HospitalBranch" hb
            JOIN public."Hospital" h ON h."hospitalId" = hb."hospitalId" WHERE hb."hosBranchId" = '${branch}'`,
      (error, result) => {
        if (!error) {
          // console.log('in error');
          console.log(result.rows);
          info.name = result.rows[0].name;
          info.location = result.rows[0].location;
          // console.log(info);
          resolve(info);
        } else {
          console.log("in error");
          reject(error);
        }
      }
    );
  });
};

module.exports = { getInfo };
