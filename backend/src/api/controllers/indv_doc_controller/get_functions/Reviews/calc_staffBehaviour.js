const {database} = require('../../../../../config/db_setup.js');

const calcStaffBeh = async(docId)=>{
    return new Promise((resolve, reject)=>{
        database.query(`SELECT
        ROUND((((COUNT(*) FILTER (WHERE dr."staffBehaviour" = true))::decimal / COUNT(*)) * 5), 1)staffBehaviour
        FROM
        public."Doctor" d
        INNER JOIN public."DoctorReviews" dr ON d."docId" = dr."docId"
        WHERE d."docId" = '${docId}'
        GROUP BY d."docId"`, (err, result)=>{
            if(err) reject(err);
            resolve(result.rows[0].staffbehaviour);
        })
    })
};

module.exports = {calcStaffBeh};