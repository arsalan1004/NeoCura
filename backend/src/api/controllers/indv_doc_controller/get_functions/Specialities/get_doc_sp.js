const { database } = require("../../../../../config/db_setup.js");
const { getSpecId } = require("./join_query.js");
const { list_convert } = require("../../../../helpers/index.js");

let spec_list = [];

const getDocSpecs = async (id) => {
  const specIdObj = await getSpecId(id);
  spec_list = list_convert(specIdObj);

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "specialityName" FROM public."Speciality" WHERE "spId" IN (${spec_list})`,
      (error, result) => {
        if (!error) {
          rawSpecs = result.rows;
          let list = rawSpecs.map((item) => item.specialityName);
          resolve(list);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getDocSpecs };
