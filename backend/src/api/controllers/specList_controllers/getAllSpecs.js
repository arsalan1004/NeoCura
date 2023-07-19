const { database } = require("../../../config/db_setup.js");

const getSpecsData = async () => {
  let Info = {};
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT sp."specialityName" AS name, COUNT(ds."docId") AS noOfDr
    FROM public."DocSpeciality" ds
    JOIN public."Speciality" sp ON sp."spId" = ds."spId"
    GROUP BY sp."specialityName" ORDER BY sp."specialityName" ASC`,
      (err, results) => {
        if (err) reject(err);
        
        resolve(results.rows);
      }
    );
  });
};

module.exports = { getSpecsData };
