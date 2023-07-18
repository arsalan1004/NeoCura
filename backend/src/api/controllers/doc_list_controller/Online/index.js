const { getOnlineDocIds } = require("./get_onlineDocIDs/get_Ids.js");
const { getDoctors } = require("../../indv_doc_controller/index.js");

const getOnlineDocs = async (Request, Response) => {
  const onlineDocIds = await getOnlineDocIds(Request.params.city);

  const onlineDocs = await Promise.all(
    onlineDocIds.map(async (id) => {
      const doc = await getDoctors(id);
      return doc;
    })
  );
  Response.status(200).json(onlineDocs);
};

module.exports = { getOnlineDocs };
