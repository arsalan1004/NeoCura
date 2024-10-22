const { database } = require("../../../config/db_setup.js");

const OnlineBookingController = async (req, response) => {
  const request = req.body;
  try {
    database.query(
      `INSERT INTO public."BookingRecords" ("platDocId", "patId", "Date", "Time", "Status") VALUES (${request.docId}, ${request.patId}, '${request.date}', '${request.time}', '${request.status}') RETURNING *;`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Appointment Succesfully Requested",
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

module.exports = { OnlineBookingController };
