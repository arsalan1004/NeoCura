const { database } = require("../../../../../config/db_setup.js");
const { getSpecId } = require("../Specialities/join_query.js");
const { getCondIds } = require("./join_query.js");
const { list_convert } = require("../../../../helpers/index.js");

const getDocConditions = async (request) => {
  const specIdObj = await getSpecId(request);
  specId_list = list_convert(specIdObj);

  const condIdObj = await getCondIds(request, specId_list);
  condId_list = list_convert(condIdObj);

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "conditionName" FROM public."HealthCondition" WHERE "conId " IN (${condId_list})`,
      (error, result) => {
        if (!error) {
          let list = result.rows.map((cond) => cond.conditionName);
          resolve(list);
        } else {
          console.log("in cond table");
          reject(error);
        }
      }
    );
  });
};

module.exports = {
  getDocConditions,
};
