const { getAllBlogs } = require("./get_functions/All_Blogs/get_all_blogs.js");

const getBlogs = async (request, response) => {
  try {
    // Get all blogs Details
    const blogs = await getAllBlogs(request);
    // let responseData = {
    //   docId: docName[0].docId,
    //   name: docName[0].name,
    //   experience: docName[0].experience,
    //   waitTime: docName[0].waitTime,
    //   isPlatinum: docName[0].isPlatinum,
    //   docEdu,
    //   specialization: docSpecs,
    //   languagesSpoken: docLangs,
    //   conditionsTreated: docConds,
    // };

    response.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBlogs };
