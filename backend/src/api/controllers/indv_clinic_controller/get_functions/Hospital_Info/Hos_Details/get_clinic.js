const {database} = require('../../../../../../config/db_setup.js');

const getClinic = async(id)=>{

    return new Promise((resolve, reject) =>{
        database.query(`SELECT * FROM public."Clinic"
        WHERE "clinicId" = '${id}'`, (err, result) => {
            if(err) reject(err);
            resolve(result.rows);
        });
    });
};

module.exports = {getClinic};