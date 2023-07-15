const { islHos } = require("./Islamabad/index.js");
const { karHos } = require("./Karachi/index.js");
const { lahHos } = require("./Lahore/index.js");
const { peshHos } = require("./Peshawar/index.js");
const { quetHos } = require("./Quetta/index.js");

const getHospitals = async () => {
  const hospitals = [
    { Karachi: await karHos() },
    { Lahore: await lahHos() },
    { Islamabad: await islHos() },
    { Quetta: await quetHos() },
    { Peshawar: await peshHos() },
  ];

  return hospitals;
};

module.exports = { getHospitals };
