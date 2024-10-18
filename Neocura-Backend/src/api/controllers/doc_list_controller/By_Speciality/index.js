const { finalList } = require("./get_docIds/final_list.js");
const { getDoctors } = require("../../indv_doc_controller/index.js");

const getSpecDocs = async (Request, Response) => {
  console.log(Request.url);
  const docIds = await finalList(Request);
  console.log(docIds);

  const all_doctors = await Promise.all(
    docIds.map(async (id) => {
      const doc = await getDoctors(id);
      return doc;
    })
  );

  Response.json(all_doctors);
};

module.exports = { getSpecDocs };
