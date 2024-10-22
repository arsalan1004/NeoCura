const { database } = require("../../../config/db_setup.js");

const BookingByDoctorIdController = async (req, response) => {
  const request = req.params;
  try {
    database.query(
      `SELECT * FROM public."BookingRecords" WHERE "platDocId"=${request.id} AND "Status" = 'pending';`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Data Successfully Found",
            data: result.rows,
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

const BookingByPatientIdController = async (req, response) => {
  const request = req.params;
  try {
    database.query(
      `SELECT * FROM public."BookingRecords" WHERE "patId"=${request.id} AND "Status" = 'pending';`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Data Successfully Found",
            data: result.rows,
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

module.exports = { BookingByPatientIdController, BookingByDoctorIdController };
