const { getConds } = require("./Condition/index.js");
const { getSpecs } = require("./Speciality/index.js");
const { getOnline } = require("./Online/index.js");
const { getTreats } = require("./Treatment/index.js");

const getDoctor = async () => {
  const doctor = [
    { Speciality: await getSpecs() },
    { Condition: await getConds() },
    {Treatment: await getTreats()},
    { Online: await getOnline() },
  ];
  console.log(doctor);

  return doctor;
};

module.exports = { getDoctor };
