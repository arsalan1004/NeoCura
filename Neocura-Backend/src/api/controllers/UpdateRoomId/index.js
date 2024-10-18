const { database } = require("../../../config/db_setup.js");

const UpdateRoomIdController = async (req, response) => {
  const request = req.body;
  console.log(request);
  try {
    database.query(
      `UPDATE public."BookingRecords" SET "RoomId"=${request.roomId} WHERE "onlineConsultId"=${request.id};`,
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

const GetRoomIdController = async (req, response) => {
  const request = req.params;
  console.log(request);
  try {
    database.query(
      `SELECT "RoomId" FROM public."BookingRecords" WHERE "onlineConsultId"=${request.id};`,
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

module.exports = { UpdateRoomIdController, GetRoomIdController };
