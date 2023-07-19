const { database } = require("../../../../../config/db_setup.js");

let condIdObj = [];

const getCondIds = (request, spec_list) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conId" FROM public."HealthConSpec" WHERE "spId" IN (${spec_list})`,
      (err, result) => {
        if (!err) {
          condIdObj = result.rows;
          resolve(condIdObj);
        } else {
          reject(err);
        }
      }
    );
  });
};

module.exports = {
  getCondIds,
};
