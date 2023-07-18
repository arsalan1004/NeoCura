const { database } = require("../../../../../config/db_setup.js");

const getSpeciality = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "specialityName" as name FROM public."Speciality"`,
      (error, result) => {
        if (!error) {
          const spec=result.rows.map((e,i)=>({
            label:e.name,
            type:'Speciality',
          }))
          resolve(spec);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getSpeciality };
