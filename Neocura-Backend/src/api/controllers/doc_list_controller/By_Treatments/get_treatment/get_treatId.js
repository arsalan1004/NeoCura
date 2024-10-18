const { database } = require("../../../../../config/db_setup.js");

const getId = async (serviceName) => {

  const serviceName1 = serviceName.split('-').join(' ');

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "serviceId" FROM public."Services" WHERE "serviceName" = '${serviceName1}'`,
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result.rows[0].serviceId);
      }
    );
  });
};

module.exports = { getId };
