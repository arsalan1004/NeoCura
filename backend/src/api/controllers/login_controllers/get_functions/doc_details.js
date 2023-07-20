const { database } = require("../../../../config/db_setup.js");

const docDetails = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT * FROM public."Doctor" WHERE "email"='${request.email}'`,
      (error, result) => {
        if (!error) {
          if(result.rows[0]){
            if (result.rows[0].password === request.password) {
              resolve(result.rows[0]);}
            else {
                reject("Wrong password");
              }
          } 
          else {
            database.query(
              `SELECT * FROM public."Patient" WHERE "email"='${request.email}'`,
              (error, result) => {
                if (!error) {
                  if(result.rows[0]){
                    if (result.rows[0].password === request.password) {
                      resolve(result.rows[0]);}
                    else {
                        reject("Wrong password");
                      }
                  } 
                  else {
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
  });
};

module.exports = { docDetails };