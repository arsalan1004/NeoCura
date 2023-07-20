const { database } = require("../../../../config/db_setup.js");

const getSpecsData = async () => {
<<<<<<< HEAD
  let Info = {};
=======
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT sp."specialityName" AS name, COUNT(ds."docId") AS noOfDr
    FROM public."DocSpeciality" ds
    JOIN public."Speciality" sp ON sp."spId" = ds."spId"
<<<<<<< HEAD
<<<<<<<< HEAD:backend/src/api/controllers/all_list_controller/specList/getAllSpecs.js
    GROUP BY sp."specialityName" ORDER BY hc."specialityName"`,
========
    GROUP BY sp."specialityName" ORDER BY sp."specialityName" ASC`,
>>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b:backend/src/api/controllers/specList_controllers/getAllSpecs.js
      (err, results) => {
        if (err) reject(err);
        
=======
    GROUP BY sp."specialityName" ORDER BY sp."specialityName"`,
      (err, results) => {
        if (err) reject(err);
        console.log(results.rows);
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
        resolve(results.rows);
      }
    );
  });
};

<<<<<<< HEAD
module.exports = { getSpecsData };
=======
module.exports = { getSpecsData };
>>>>>>> 210093c5bf892f6b8e0838b9f19ee0fd3d7b822b
