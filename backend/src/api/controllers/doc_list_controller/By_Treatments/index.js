const { getTreatDocIds } = require("./get_docIds/docIds.js");
const { getDoctors } = require("../../indv_doc_controller/index.js");

const getTreatDocs = async (Request, Response) => {
  const treatDocIds = await getTreatDocIds(
    Request.params.treatment,
    Request.params.city
  );

  const treatDocs = await Promise.all(
    treatDocIds.map(async (id) => {
      const doc = await getDoctors(id);
      return doc;
    })
  );

  Response.status(200).json(treatDocs);
};
module.exports = { getTreatDocs };
