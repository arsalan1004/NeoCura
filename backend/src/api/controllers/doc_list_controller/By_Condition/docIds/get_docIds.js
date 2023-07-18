const { database } = require("../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");
const { getCondId } = require("../condId/get_condId.js");

const getDocIds = async (Request) => {
  const condId = await getCondId(Request.params.condition);

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT dr."docId" FROM public."Doctor" dr JOIN public."DocSpeciality" ds
      ON dr."docId" = ds."docId"
      JOIN public."HealthConSpec" hs
      ON ds."spId" = hs."spId" WHERE hs."conId" = '${condId}' AND dr."city" = '${Request.params.city}'`,
      (err, result) => {
        if (err) reject(err);
        resolve(list_convert(result.rows));
      }
    );
  });
};

module.exports = { getDocIds };
