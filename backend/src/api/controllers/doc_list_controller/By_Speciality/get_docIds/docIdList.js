const { database } = require("../../../../../config/db_setup.js");
const {
  list_convert,
} = require("../../../../helpers/List_Converter/to_list.js");

const getDocIds = async (spec) => {
<<<<<<< HEAD
  let newlist = spec.split("-");
  let sp = newlist.join(" ");
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT ds."docId" FROM public."DocSpeciality" ds JOIN public."Speciality" s
      ON ds."spId" = s."spId" WHERE s."specialityName" = '${sp}'`,
=======

  const spec1 = spec.split('-').join(' ');

  return new Promise((resolve, reject) => {
    database.query(
      `SELECT ds."docId" FROM public."DocSpeciality" ds JOIN public."Speciality" s
      ON ds."spId" = s."spId" WHERE s."specialityName" = '${spec1}'`,
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
      (error, result) => {
        if (!error) {
          resolve(list_convert(result.rows));
        } else {
          console.log("in error");
          reject(error);
        }
      }
    );
  });
};

module.exports = { getDocIds };
