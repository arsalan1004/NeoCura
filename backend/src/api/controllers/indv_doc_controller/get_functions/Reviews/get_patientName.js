const {database} = require('../../../../../config/db_setup.js');

const getName = async(revId)=>{
    return new Promise((resolve, reject) =>{
        database.query(`SELECT p."name" FROM public."Patient" p
        JOIN public."DoctorReviews" dr ON p."patientId" = dr."patientId"
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
};

module.exports = {getName};