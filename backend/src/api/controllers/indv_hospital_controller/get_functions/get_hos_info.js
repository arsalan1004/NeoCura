const { getBranches } = require('./Hospital_Info/Branch_Details/get_branches.js');
const {getHospital} = require('./Hospital_Info/Hos_Details/get_hospital.js');
const { getTimetable } = require('./Hospital_Info/Timetable/getTimetable.js');

const getHosInfo = async(hosName, city)=>{
    const hosDetails = await getHospital(hosName);

    const hosBranches = await getBranches(hosName, city);

    const Timetable = await getTimetable(hosName);
    
    const combinedInfo = {
        hospitalId:hosDetails[0].hospitalId,
        name:hosDetails[0].name,
        averageFees:hosDetails[0].averageFees,
        totalDoctors:hosDetails[0].totalDoctors,
        branches:hosBranches,
        timetable:Timetable
    }

    return combinedInfo;

};

module.exports = {getHosInfo};