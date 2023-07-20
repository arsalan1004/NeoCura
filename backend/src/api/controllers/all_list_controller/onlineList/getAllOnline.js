const { database } = require("../../../../config/db_setup.js");

const getOnlineDta = async () => {
  return new Promise((resolve, reject) => {
    database.query(
<<<<<<< HEAD
      `select 'Online ' || sp."specialityName" AS "name", COUNT(ds."docId") AS "noOfDr"
=======
      `select 'Online ' || sp."specialityName" AS "name", COUNT(ds."docId") AS "noofdr"
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
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

<<<<<<< HEAD
module.exports = { getOnlineDta };
=======
module.exports = { getOnlineDta };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
