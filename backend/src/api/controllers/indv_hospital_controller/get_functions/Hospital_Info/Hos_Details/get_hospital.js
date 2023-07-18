const {database} = require('../../../../../../config/db_setup.js');

const getHospital = async(hosName)=>{

    return new Promise((resolve, reject) =>{
        database.query(`SELECT * FROM public."Hospital"
        WHERE "name" = '${hosName}'`, (err, result) => {
            if(err) reject(err);
            resolve(result.rows);
        });
    });
};

module.exports = {getHospital};