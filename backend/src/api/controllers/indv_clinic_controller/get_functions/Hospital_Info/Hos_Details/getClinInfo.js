const { database } = require("../../../../../../config/db_setup.js");

const getInfo = async (id) => {
  let info = {};

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "name", "location", "contactNumber" FROM public."Clinic"
        WHERE "clinicId" = '${id}'`,
      (err, result) => {
        if (err) reject(err);
        let name = result.rows[0].name.split(" ");
        info.name = result.rows[0].name;
        info.location = result.rows[0].location;
        info.contactNumber = result.rows[0].contactNumber;
        info.postalCode = 72649;
        info.email = name[0] + "." + name[1] + "@gmail.com";
        resolve(info);
      }
    );
  });
};

module.exports = { getInfo };