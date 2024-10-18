const { database } = require("../../../../config/db_setup.js");

const docDetails = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT * FROM public."Doctor" WHERE "email"='${request.email}'`,
      (error, result) => {
        if (!error) {
          if (result.rows[0]) {
            if (result.rows[0].password === request.password) {
              let modal = {
                type: "doctor",
                accesToken:
                  result.rows[0].name.split(" ")[0] +
                  result.rows[0].phoneNumber +
                  result.rows[0].name.split(" ")[1],
                data: result.rows[0],
              };
              resolve(modal);
            } else {
              reject("Wrong password");
            }
          } else {
            database.query(
              `SELECT * FROM public."Patient" WHERE "email"='${request.email}'`,
              (error, result) => {
                if (!error) {
                  if (result.rows[0]) {
                    if (result.rows[0].password === request.password) {
                      let modal = {
                        type: "patient",
                        accesToken:
                          result.rows[0].name.split(" ")[0] +
                          "-" +
                          result.rows[0].name.split(" ")[1],
                        data: result.rows[0],
                      };

                      resolve(modal);
                    } else {
                      reject("Wrong password");
                    }
                  } else {
                    database.query(
                      `SELECT * FROM public."admin" WHERE "email"='${request.email}'`,
                      (error, result) => {
                        if (!error) {
                          if (result.rows[0]) {
                            if (result.rows[0].password === request.password) {
                              let modal = {
                                type: "admin",
                                accesToken:
                                  result.rows[0].name.split(" ")[0] +
                                  result.rows[0].phone_number +
                                  result.rows[0].name.split(" ")[1],
                                data: result.rows[0],
                              };

                              resolve(modal);
                            } else {
                              reject("Wrong password");
                            }
                          } else {
                            reject("Wrong Email");
                          }
                        } else {
                          reject(error);
                        }
                      }
                    );
                  }
                } else {
                  reject(error);
                }
              }
            );
          }
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { docDetails };
