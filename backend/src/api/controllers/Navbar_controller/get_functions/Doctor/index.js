const { getConds } = require("./Condition/index.js");
const { getSpecs } = require("./Speciality/index.js");
const { getOnline } = require("./Online/index.js");

const getDoctor = async () => {
  const doctor = [
    { Speciality: await getSpecs() },
    { Condition: await getConds() },
    { Online: await getOnline() },
  ];

  return doctor;
};

module.exports = { getDoctor };
