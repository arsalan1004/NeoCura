const { database } = require("../../../../../config/db_setup.js");

const getServices = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "serviceName" as name FROM public."Services"`,
      (error, result) => {
        if (!error) {
          const cond=result.rows.map((e,i)=>({
            label:e.name,
            type:'Services',
          }))
          resolve(cond);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getServices };
