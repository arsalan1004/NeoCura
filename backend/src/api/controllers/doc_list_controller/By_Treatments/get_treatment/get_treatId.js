const { database } = require("../../../../../config/db_setup.js");

const getId = async (serviceName) => {
  let newlist = serviceName.split("-");
  let serv = newlist.join(" ");
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "serviceId" FROM public."Services" WHERE "serviceName" = '${serv}'`,
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
