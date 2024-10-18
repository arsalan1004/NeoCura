const { database } = require("../../../config/db_setup.js");

const AcceptBookingController = async (req, response) => {
  const request = req.params;
  console.log(request);
  try {
    database.query(
      `UPDATE public."BookingRecords" SET "Status"='Approved' WHERE "onlineConsultId"=${request.id};`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Data Successfully Updated",
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

module.exports = { AcceptBookingController };
