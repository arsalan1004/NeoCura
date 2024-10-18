const { getClinInfo } = require("./get_functions/get_clin_info");

const getClinics = async(Request, Response)=>{
    let splitName = Request.params.name.split('-');
    let clinName = splitName.join(" ");
    const city = Request.params.city;

    const response = await getClinInfo(clinName, city);

    Response.status(200).json(response);
};

module.exports = {
    getClinics
};