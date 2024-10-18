const {database} = require('../../../../../../config/db_setup.js');
const { getHosId } = require('../Hos_Details/getId.js');
const {list_convert}=require('../../../../../helpers/List_Converter/to_list.js')

const getBranches = async(hosName, city) => {
    const hosId = await getHosId(hosName);

    return new Promise((resolve, reject) => {
        database.query(`SELECT "hosBranchId" FROM public."HospitalBranch"
        WHERE "hospitalId" = '${hosId}' AND "city" = '${city}'`, (err, result) => {
            if (err) reject(err);
            resolve(list_convert(result.rows));
        })
    })
};

module.exports = {getBranches};