const {database} = require('../../../../../config/db_setup.js');

const getDesc = async(revId)=>{
    return new Promise((resolve, reject) =>{
        database.query(`SELECT "desc" FROM public."DoctorReviews"
        WHERE "reviewId" = '${revId}'`,(error,result)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(result.rows[0].desc);
            }
        })
    })
};

module.exports = {getDesc};