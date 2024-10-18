const express = require('express');
const { getClinics } = require('../../controllers/indv_clinic_controller/index.js');
const clinRouter = express.Router();

clinRouter.get("/Clinic/:city/:name", getClinics);

module.exports = {clinRouter};