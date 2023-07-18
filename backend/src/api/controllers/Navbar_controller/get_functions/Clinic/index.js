const { islclin } = require("./Islamabad/index.js");
const { karclin } = require("./Karachi/index.js");
const { lahclin } = require("./Lahore/index.js");
const { peshclin } = require("./Peshawar/index.js");
const { quetclin } = require("./Quetta/index.js");

const getClinics = async () => {
  const clinics = [
    { Karachi: await karclin() },
    { Lahore: await lahclin() },
    { Islamabad: await islclin() },
    { Quetta: await quetclin() },
    { Peshawar: await peshclin() },
  ];

  return clinics;
};

module.exports = { getClinics };
