const { database } = require("../../../../../config/db_setup.js");

const getId = async (serviceName) => {
<<<<<<< HEAD
  let newlist = serviceName.split("-");
  let serv = newlist.join(" ");
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "serviceId" FROM public."Services" WHERE "serviceName" = '${serv}'`,
=======

  const serviceName1 = serviceName.split('-').join(' ');

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "serviceId" FROM public."Services" WHERE "serviceName" = '${serviceName1}'`,
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
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
