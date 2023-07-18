const express = require("express");
const indvRouter = express.Router();

const {
  selectDoc,
} = require("../../controllers/selectDoc_controllers/selectDoc.js");

// Get by Speciality
indvRouter.get("/Doctor/Speciality/:speciality/:city/:id", selectDoc);

// Get by Condition
indvRouter.get("/Doctor/Condition/:condition/:city/:id", selectDoc);

// Get by Treatments (Services)
indvRouter.get("/Doctor/Treatment/:treatment/:city/:id", selectDoc);

// Get Online
indvRouter.get("/Doctor/Online/:city/:id", selectDoc);

module.exports = { indvRouter };
