const { finalList } = require("./get_docIds/final_list.js");
const { getDoctors } = require("../../indv_doc_controller/index.js");

const getSpecDocs = async (Request, Response) => {
  const docIds = await finalList(Request);

  const all_doctors = await Promise.all(
    docIds.map(async (id) => {
      const doc = await getDoctors(id);
      return doc;
    })
  );

  Response.json(all_doctors);
};

module.exports = { getSpecDocs };
