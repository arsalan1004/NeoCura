const { getTimepassed } = require('./getTimepassed.js');
const {getName} = require('./get_patientName.js');
const { getDesc } = require('./get_revDesc.js');

const getRevInfo = async(revId)=>{
    const pName = await getName(revId);
    const desc= await getDesc(revId);
    const timePassed = await getTimepassed(revId);

    const revInfo = {
        name: pName,
        timePassed: timePassed,
        review: desc
    }
    return revInfo;

};

module.exports = {getRevInfo};