const { database } = require("../../../../../../../../config/db_setup.js");

const getInfo = (id) => {
  let info = {};
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT hb."name", hb."location" || ', ' || hb."city" AS "location"
            FROM public."Clinic" hb
            JOIN public."DocClinic" h ON h."clinicId" = hb."clinicId" WHERE hb."clinicId" = '${id}'`,
      (error, result) => {
        if (!error) {
          info.name = result.rows[0].name;
          info.location = result.rows[0].location;
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
