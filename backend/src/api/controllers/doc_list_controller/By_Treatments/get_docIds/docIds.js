const { database } = require("../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");
const { getId } = require("../get_treatment/get_treatId.js");

const getTreatDocIds = async (serviceName, city) => {
  const treatId = await getId(serviceName);

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT dr."docId" FROM public."Doctor" dr
        JOIN public."DocSpeciality" ds ON dr."docId" = ds."docId"
        JOIN public."SpecServices" ss ON ss."spId" = ds."spId"
        WHERE "serviceId" = '${treatId}' AND dr."city" = '${city}'`,
      (error, result) => {
        if (!error) {
          resolve(list_convert(result.rows));
        } else {
          reject(error);
        }
      }
    );
  });
};
module.exports = { getTreatDocIds };
