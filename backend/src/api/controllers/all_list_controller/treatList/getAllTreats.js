const { database } = require("../../../../config/db_setup.js");

const getTreatsDta = async () => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT hc."serviceName" AS "name", COUNT(ds."docId") AS noOfDr
      FROM public."Services" hc
      JOIN public."SpecServices" hcs ON hcs."serviceId" = hc."serviceId"
      JOIN public."DocSpeciality" ds ON hcs."spId" = ds."spId"
      GROUP BY hc."serviceName"
      ORDER BY hc."serviceName"`,
      (err, results) => {
        if (err) reject(err);
        resolve(results.rows);
      }
    );
  });
};

<<<<<<< HEAD
module.exports = { getTreatsDta };
=======
module.exports = { getTreatsDta };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
