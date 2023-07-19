const { database } = require("../../../../../config/db_setup.js");

const getAllBlogs = (request) => {
  return new Promise((resolve, reject) => {
    database.query(
      `SELECT hb."blogId", hb.title, hb.content, hb."publishData", hb."lastUpdated", hb."readTime",
      b.name AS blogger_name, b.bio AS blogger_bio, b.email AS blogger_email, b.specialty AS blogger_specialty,
      ARRAY_AGG(c.name) AS category_names, ARRAY_AGG(c.description) AS category_descriptions,
      m.path AS img_url, m.description AS img_description
FROM public."HealthBlog" hb
JOIN public."Blogger" b ON hb."bloggerId" = b."bloggerId"
JOIN public."BlogCategory" bc ON hb."blogId" = bc."blogId"
JOIN public."Category" c ON bc."catId" = c."catId"
JOIN public."Media" m ON hb."blogId" = m."blogId"
GROUP BY hb."blogId", hb.title, hb.content, hb."publishData", hb."lastUpdated", hb."readTime",
        b.name, b.bio, b.email, b.specialty,
        m.path, m.description
        `,
      (error, result) => {
        if (!error) {
          console.log(result)
          resolve(result.rows);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getAllBlogs };
