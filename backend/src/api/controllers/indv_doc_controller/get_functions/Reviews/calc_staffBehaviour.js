const { database } = require("../../../../../config/db_setup.js");

const calcStaffBeh = async (docId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT
        ROUND((((COUNT(*) FILTER (WHERE dr."staffBehaviour" = true))::decimal / COUNT(*)) * 5), 1)staffBehaviour
        FROM
        public."Doctor" d
        INNER JOIN public."DoctorReviews" dr ON d."docId" = dr."docId"
        WHERE d."docId" = '${docId}'
<<<<<<< HEAD
        GROUP BY d."docId"`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.rows[0] == undefined) {
            resolve("0");
          } else {
            resolve(result.rows[0].staffBehaviour);
          }
        }
      }
    );
  });
=======
        GROUP BY d."docId"`, (err, result)=>{
            if(err) {
                reject(err);
            }else{
                if (result.rows[0] == undefined) {
                    resolve("0");
                  } else {
                    resolve(result.rows[0].staffBehaviour);
                  }
            }
        })
    })
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
};

module.exports = { calcStaffBeh };
