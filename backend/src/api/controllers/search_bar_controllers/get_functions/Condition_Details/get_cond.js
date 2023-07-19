const { database } = require("../../../../../config/db_setup.js");

const getCondition = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conditionName" as name FROM public."HealthCondition"`,
      (error, result) => {
        if (!error) {
          const cond=result.rows.map((e,i)=>({
            label:e.name,
            type:'Condition',
          }))
          resolve(cond);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getCondition };
