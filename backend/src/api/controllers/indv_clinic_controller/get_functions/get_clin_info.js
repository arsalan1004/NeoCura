const { getClinId } = require('./Hospital_Info/Hos_Details/getId.js');
const { getClinic } = require('./Hospital_Info/Hos_Details/get_clinic.js');
const { getTimetable } = require('./Hospital_Info/Timetable/getTimetable.js');

const getClinInfo = async(clinName, city)=>{
    const clinId = await getClinId(clinName, city);

    const clinDetails = await getClinic(clinId);

    const Timetable = await getTimetable(clinId);
    
    const combinedInfo = {
        clinicId:clinDetails[0].clinicId,
        name:clinDetails[0].name,
        averageFees:clinDetails[0].averageFees,
        city:clinDetails[0].city,
        location:clinDetails[0].location,
        timetable:Timetable
    }

    return combinedInfo;

};

module.exports = {getClinInfo};