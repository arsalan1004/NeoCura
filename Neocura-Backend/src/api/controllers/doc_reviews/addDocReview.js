const { database } = require("../../../config/db_setup.js");

const addDocReview = async (req, response) => {
  const request = req.body;
  try {
    database.query(
      `INSERT INTO public."DoctorReviews"(
	"patientId", "docId", "desc", "reviewDateTime", "satisfaction", "consultTime", diagnosis, "waitTime", "staffBehaviour")
	VALUES (${request.patientId}, ${request.docId}, '${request.desc}', '${
        new Date().toISOString().split("T")[0]
      }', '${request.satisfaction}', '${request.consultTime}', '${
        request.diagnosis
      }', '${request.waitTime}', ${Boolean(
        request.staffBehaviour
      )}) RETURNING *;`,
      (error, result) => {
        if (!error) {
          response.status(200).json({
            message: "Review Successfully Submitted",
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

module.exports = { addDocReview };
