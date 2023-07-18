const {database} = require('../../../../../../config/db_setup.js');

const getClinId = async(clinName, city)=>{
    return new Promise((resolve, reject)=>{
        database.query(`SELECT "clinicId" FROM public."Clinic" WHERE "name" = '${clinName}' AND "city" = '${city}'`, (err, result)=>{
            if(err) reject(err);
            resolve(result.rows[0].clinicId);
        });
    });
};

module.exports = {getClinId};