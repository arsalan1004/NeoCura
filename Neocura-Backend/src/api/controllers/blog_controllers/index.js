const { getAllBlogs } = require("./get_functions/All_Blogs/get_all_blogs.js");

const getBlogs = async (request, response) => {
  try {
    // Get all blogs Details
    const blogs = await getAllBlogs(request);
 
    response.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBlogs };
