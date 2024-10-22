const { database } = require("../../../config/db_setup.js");

const getDoctorByIdIdController = async (req, response) => {
  const request = req.params;
  try {
    database.query(
      `SELECT * FROM public."Doctor" WHERE "docId"=${request.id};`,
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

module.exports = { getDoctorByIdIdController };
