const { database } = require("../../../../../config/db_setup.js");

const getSpecId = (Request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "spId" FROM public."Speciality" WHERE "specialityName" = '${Request.params.speciality}'`,
      (err, result) => {
        if (!err) {
          resolve(result.rows[0].spId);
        } else {
          reject(err);
        }
      }
    );
  });
};

module.exports = { getSpecId };
