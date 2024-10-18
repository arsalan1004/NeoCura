const { getBranches } = require('./Hospital_Info/Branch_Details/get_branches.js');
const { getFees } = require('./Hospital_Info/Fees/get_fees.js');
const {getHospital} = require('./Hospital_Info/Hos_Details/get_hospital.js');
const { getTimetable } = require('./Hospital_Info/Timetable/get_Timetable.js');
const { getInfo } = require('./Hospital_Info/name_loc/get_info.js');

const getHosInfo = async(hosName, city)=>{
    const hosDetails = await getHospital(hosName);

    const hosBranch = await getBranches(hosName, city);

    hosSpecificInfo = await Promise.all(hosBranch.map(async(br)=>{
        const info = await getInfo(br);
        return {
            name: info.name,
            location: info.location,
            postalCode: info.postalCode,
            email: info.email,
            fees: await getFees(br),
            timetable: await getTimetable(br),
        }
    }))
    
    const result = {
        hospitalId: hosDetails[0].hospitalId,
        name: hosDetails[0].name,
        averageFees: hosDetails[0].averageFees,
        totalDoctors: hosDetails[0].totalDoctors,
        branches:hosSpecificInfo
    }
    

    return result;

};

module.exports = {getHosInfo};