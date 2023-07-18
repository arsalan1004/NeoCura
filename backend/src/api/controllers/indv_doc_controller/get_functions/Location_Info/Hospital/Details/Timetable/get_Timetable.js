const { database } = require("../../../../../../../../config/db_setup.js");
const { getTtId } = require("./TtId.js");

const getTimetable = async (branch, docId) => {
  const ttId = await getTtId(branch, docId);
  return new Promise((reslove, reject) => {
    database.query(
      `SELECT "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" FROM public."Timetable" WHERE "ttId" = '${ttId[0]}'`,
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
