const { database } = require("../../../../../config/db_setup.js");

const getName = async (revId) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT p."name" FROM public."Patient" p
        JOIN public."DoctorReviews" dr ON p."patientId" = dr."patientId"
<<<<<<< HEAD
        WHERE dr."reviewId" = '${revId}'`,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows[0].name);
        }
      }
    );
  });
=======
        WHERE dr."reviewId" = '${revId}'`,(error,result)=>{
            if(error){
                reject(error);
            }
            else{
                if (result.rows[0] == undefined) {
                    resolve("Abdullah");
                  } else {
                    resolve(result.rows[0].name);
                  }
            }
        }
    )})
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
};

module.exports = { getName };
