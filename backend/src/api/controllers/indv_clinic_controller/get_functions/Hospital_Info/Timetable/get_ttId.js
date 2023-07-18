const {database} = require('../../../../../../config/db_setup.js');

const getTtId = async(clinId) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT da."ttId" FROM public."DocsAvailability" da 
        JOIN public."Clinic" cl ON cl."clinicId" = da."clinicId"
         WHERE cl."clinicId" = '${clinId}' LIMIT 1`, (err, result) => {
            if (err) reject(err);
            resolve(result.rows[0].ttId);
        });
    });
};

module.exports = {getTtId};