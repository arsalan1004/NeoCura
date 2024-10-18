const { database } = require("../../../../../config/db_setup.js");

const getHospital = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "name" as name FROM public."Hospital" LIMIT 10`,
      (error, result) => {
        if (!error) {
          const hosp =result.rows.map((e,i)=>({
            label:e.name,
            type:'Hospital',
          }))
          resolve(hosp);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getHospital };
