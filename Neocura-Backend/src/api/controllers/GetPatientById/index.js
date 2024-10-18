const { database } = require("../../../config/db_setup.js");

const getPatientByIdIdController = async (req, response) => {
  const request = req.params;
  console.log(request);
  try {
    database.query(
      `SELECT "patientId","email","img","phoneNumber","name" FROM public."Patient" WHERE "patientId"=${request.id};`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Data Successfully Found",
            data: result.rows[0],
          });
        } else {
          console.log(error);
          response.status(300).json(error);
        }
      }
    );
  } catch (error) {
    response.status(300).json(error);
  }
};

module.exports = { getPatientByIdIdController };
