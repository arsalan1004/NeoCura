const express = require('express');
const { getHospitals } = require('../../controllers/indv_hospital_controller/index.js');
const hosRouter = express.Router();

hosRouter.get("/Hospital/:city/:name", getHospitals);

module.exports = {hosRouter};