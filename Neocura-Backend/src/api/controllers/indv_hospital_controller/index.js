const {getHosInfo} = require('./get_functions/get_hos_info.js');

const getHospitals = async (Request, Response) =>{
    let splitName = Request.params.name.split('-');
    let hosName = splitName.join(" ");
    const city = Request.params.city;

    const response = await getHosInfo(hosName, city);

    Response.status(200).json(response);

};

module.exports = {getHospitals};