const { database } = require("../../../../../config/db_setup.js");

const getDoctors = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT "name" as docname FROM public."Doctor"`,
      (error, result) => {
        if (!error) {
          const docs=result.rows.map((e,i)=>({
            label:e.docname,
            type:'Doctor',
          }))
          resolve(docs);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getDoctors };
