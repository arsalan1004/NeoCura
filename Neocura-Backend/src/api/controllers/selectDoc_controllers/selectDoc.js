const { getDoctors } = require("../indv_doc_controller/index.js");

const selectDoc = async (Request, Response) => {
  const response = await getDoctors(Request.params.id);
  console.log(response);
  Response.status(200).json(response);
};

module.exports = { selectDoc };
