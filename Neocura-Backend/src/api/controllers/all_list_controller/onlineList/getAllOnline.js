const { database } = require("../../../../config/db_setup.js");

const getOnlineDta = async () => {
  return new Promise((resolve, reject) => {
    database.query(
      `select 'Online ' || sp."specialityName" AS "name", COUNT(ds."docId") AS "noofdr"
      FROM public."Speciality" sp JOIN 
      public."DocSpeciality" ds ON ds."spId" = sp."spId"
      JOIN public."Doctor" dr ON ds."docId" = dr."docId"
      WHERE dr."isPlatinum" = true
      GROUP BY sp."specialityName"`,
      (err, results) => {
        if (err) reject(err);
        resolve(results.rows);
      }
    );
  });
};

module.exports = { getOnlineDta };