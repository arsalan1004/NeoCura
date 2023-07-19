// Initialize Express App
const express = require("express");
const app = express();


//Requiring Cors for access-Control-Allow-Origin
const cors = require("cors");

// Require Router
const { Router } = require("./api/routes/Doc_Route/doc_route.js");
const { BlogRouter } = require("./api/routes/Blog_Route/blog_route.js");
const { SignUpRouter } = require("./api/routes/SignUp_Route/signup_Route.js");
const { database } = require("./config/db_setup.js");
const { SearchBarRouter } = require("./api/routes/SearchBar_Route/search_bar_route.js");
const { getAllBlogs } = require("./api/controllers/blog_controllers/get_functions/All_Blogs/get_all_blogs.js");
const { getDoctors } = require("./api/controllers/search_bar_controllers/get_functions/Doctor_Details/get_doc.js");

// Require ENV variables
require("dotenv").config();

//Body parser midleware
app.use(express.json()); 

app.use(cors())
// app.use('/blogs',async (request,response) => {
//   try {
//     // Get all blogs Details
//     const blogs = await getAllBlogs(request);
//     // let responseData = {
//     //   docId: docName[0].docId,
//     //   name: docName[0].name,
//     //   experience: docName[0].experience,
//     //   waitTime: docName[0].waitTime,
//     //   isPlatinum: docName[0].isPlatinum,
//     //   docEdu,
//     //   specialization: docSpecs,
//     //   languagesSpoken: docLangs,
//     //   conditionsTreated: docConds,
//     // };

//     response.status(200).json(blogs);
//   } catch (error) {
//     console.log(error);
//   }
// })
app.use("/blogs", BlogRouter);
app.use('/searchBarApi',SearchBarRouter)
app.use("/", Router);

app.use("/signup", SignUpRouter);




// database.query(
//   `SELECT hb."blogId", hb.title, hb.content, hb."publishData", hb."lastUpdated", hb."readTime",
//   b.name AS blogger_name, b.bio AS blogger_bio, b.email AS blogger_email, b.specialty AS blogger_specialty,
//   c.name AS category_name, c.description AS category_description,
// m.path AS img_url , m.description AS img_description
// FROM public."HealthBlog" hb
// JOIN public."Blogger" b ON hb."bloggerId" = b."bloggerId"
// JOIN public."BlogCategory" bc ON hb."blogId" = bc."blogId"
// JOIN public."Category" c ON bc."catId" = c."catId"
// JOIN public."Media" m ON hb."blogId" = m."blogId";
// `,
//   (error, result) => {
//     if (!error) {
//       console.log(result.rows);
//     } else {
//       console.log(error);
//     }
//   }
// );


// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});

module.exports = { app };
