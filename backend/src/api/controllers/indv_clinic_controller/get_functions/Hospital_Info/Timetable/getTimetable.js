const {database} = require('../../../../../../config/db_setup.js');
const {getHosId} = require('../Hos_Details/getId.js');
const { getTtId } = require('./get_ttId.js');

const getTimetable = async(clinicId)=>{
    const ttId = await getTtId(clinicId);
    return new Promise((resolve, reject) =>{
        database.query(`SELECT "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" FROM public."Timetable"
         WHERE "ttId" = '${ttId}'`, (err, result)=>{
            if(err) reject(err);
            resolve(result.rows);
        })
    })
};

module.exports = {getTimetable};