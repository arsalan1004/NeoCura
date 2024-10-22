const { database } = require("../../../config/db_setup.js");

const DeleteBooking = async (req, response) => {
  const request = req.params;
  try {
    database.query(
      `DELETE FROM public."BookingRecords" WHERE "onlineConsultId"=${request.id};`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Data Successfully Deleted",
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

module.exports = { DeleteBooking };
