const {database} = require('../../../../../../config/db_setup.js');
const { getHosId } = require('../Hos_Details/getId.js');

const getBranches = async(hosName, city) => {
    const hosId = await getHosId(hosName);

    return new Promise((resolve, reject) => {
        database.query(`SELECT "hosBranchId", "city", "street", "postalCode", "email", "contactNumber" FROM public."HospitalBranch"
        WHERE "hospitalId" = '${hosId}' AND "city" = '${city}' LIMIT 1`, (err, result) => {
            if (err) reject(err);
            resolve(result.rows);
        })
    })
};

module.exports = {getBranches};