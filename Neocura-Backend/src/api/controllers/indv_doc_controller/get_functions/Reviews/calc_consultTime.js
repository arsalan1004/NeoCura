const {database} = require('../../../../../config/db_setup.js');

const calcConsultTime = async(docId)=>{
    return new Promise((resolve, reject)=>{
        database.query(`SELECT
        ROUND((((COUNT(*) FILTER (WHERE dr."satisfaction" = 'true'))::decimal / COUNT(*)) * 5), 1)satisfaction
        FROM
        public."Doctor" d
        INNER JOIN public."DoctorReviews" dr ON d."docId" = dr."docId"
        WHERE d."docId" = '${docId}'
        GROUP BY d."docId"`, (err, result)=>{
            if(err) {reject(err)}
            else{
                if (result.rows[0] == undefined) {
                    resolve("0");
                  } else {
                    resolve(result.rows[0].satisfaction);
                  }
            }
        })
    })
};

module.exports = {calcConsultTime};