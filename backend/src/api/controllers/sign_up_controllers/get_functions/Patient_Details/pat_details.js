const { database } = require("../../../../../config/db_setup");

const PostPatDetails = async (request) => {
  console.log(request.profilePic.image);
  return new Promise((resolve, reject) => {
    // database.query(
    //   `INSERT INTO public."Patient" (name, "phoneNumber", gender, email, password, city, street, "postalCode", "patImg", dob, "martialStatus") VALUES (
    //     '${request.personalInfo.firstName} ${request.personalInfo.lastName}',
    //     '${request.personalInfo.phoneNumber}',
    //     '${request.personalInfo.gender}',
    //     '${request.personalInfo.email}',
    //     '${request.personalInfo.password}',
    //     '${request.personalInfo.city}',
    //     '${request.personalInfo.street}',
    //     '${request.personalInfo.postalCode}',
    //     '${request.profilePic.image}',
    //     '${request.personalInfo.dob}',
    //     '${request.personalInfo.martialStatus}'
    //   )`,
    database.query(
      `INSERT INTO public."Patient" (name, email, password) VALUES (
        '${request.personalInfo.firstName} ${request.personalInfo.lastName}',
        '${request.personalInfo.email}',
        '${request.personalInfo.password}'
      )`,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = { PostPatDetails };