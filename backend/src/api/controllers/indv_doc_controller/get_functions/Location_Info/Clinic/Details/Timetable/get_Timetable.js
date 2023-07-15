const { database } = require("../../../../../../../../config/db_setup.js");
const { getTtId } = require("./TtId.js");

const getTimetable = async (id, docId) => {
  const ttId = await getTtId(id, docId);
  return new Promise((reslove, reject) => {
    database.query(
      `SELECT "mon","tue","wed","thurs","fri","sat","sun" FROM public."Timetable" WHERE "ttId" = '${ttId[0]}'`,
      (error, result) => {
        if (!error) {
          reslove(result.rows);
        } else {
          reject(error);
        }
      }
    );
  });
};
module.exports = { getTimetable };
