const { getDocIds } = require("./docIds/get_docIds.js");
const { getDoctors } = require("../../indv_doc_controller/index.js");

const getCondDocs = async (Request, Response) => {
  const docIds = await getDocIds(Request);
  console.log(docIds);

  const allDocs = await Promise.all(
    docIds.map(async (docId) => {
      const doc = await getDoctors(docId);
      console.log(doc);
      return doc;
    })
  );

  Response.json(allDocs);
};

module.exports = { getCondDocs };
