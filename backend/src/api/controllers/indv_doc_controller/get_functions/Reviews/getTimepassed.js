const { database } = require("../../../../../config/db_setup.js");

const getTimepassed = async(revId) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT
        CASE
          WHEN DATE_PART('year', age(current_date, "reviewDateTime")) >= 365 THEN CONCAT(DATE_PART('year', age(current_date, "reviewDateTime")), ' year(s) ago')
          WHEN DATE_PART('month', age(current_date, "reviewDateTime")) >= 30 THEN CONCAT(DATE_PART('month', age(current_date, "reviewDateTime")), ' month(s) ago')
          ELSE CONCAT(DATE_PART('day', age(current_date, "reviewDateTime")), ' week(s) ago')
        END AS elapsed_time
      FROM public."DoctorReviews"
      WHERE "reviewId" = '${revId}'`,(error, result)=>{
            if(!error){
                resolve(result.rows[0].elapsed_time);
            }
            else{
                reject(error);
            }
        })
    })
}

module.exports = {getTimepassed};