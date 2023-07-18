const {database} = require('../../../../../../config/db_setup.js');

const getTtId = async(hosId) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT da."ttId" FROM public."DocsAvailability" da 
        JOIN public."HospitalBranch" hb ON hb."hosBranchId" = da."hosBranchId"
         WHERE hb."hospitalId" = '${hosId}' LIMIT 1`, (err, result) => {
            if (err) reject(err);
            resolve(result.rows[0].ttId);
        });
    });
};

module.exports = {getTtId};