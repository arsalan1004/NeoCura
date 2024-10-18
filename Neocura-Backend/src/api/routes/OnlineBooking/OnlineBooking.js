const express = require("express");
const OnlineBooking = express.Router();

const {
  OnlineBookingController,
} = require("../../controllers/OnlineBooking/index.js");
const {
  BookingByDoctorIdController,
  BookingByPatientIdController,
} = require("../../controllers/BookingByDoctorId/index.js");
const {
  GetApprovedBookingsController,
  GetApprovedBookingsForPatController,
} = require("../../controllers/GetApprovedBookings/index.js");
const {
  AcceptBookingController,
} = require("../../controllers/AcceptBookingController/index.js");
const { DeleteBooking } = require("../../controllers/DeleteBooking/index.js");
const {
  UpdateRoomIdController,
  GetRoomIdController,
} = require("../../controllers/UpdateRoomId/index.js");

OnlineBooking.post("/", OnlineBookingController);
OnlineBooking.post("/UpdateRoomId", UpdateRoomIdController);
OnlineBooking.get("/GetRoomId/:id", GetRoomIdController);

OnlineBooking.get("/AcceptBooking/:id", AcceptBookingController);
// Using Doctor Id Routes
OnlineBooking.get("/getAll/:id", BookingByDoctorIdController);
OnlineBooking.get("/getApprovedForDoc/:id", GetApprovedBookingsController);
OnlineBooking.get(
  "/getApprovedForPat/:id",
  GetApprovedBookingsForPatController
);

// Using Patient Id Routes
OnlineBooking.get("/getAllByPatId/:id", BookingByPatientIdController);
// OnlineBooking.get("/getApproved/:id", GetApprovedBookingsController);
OnlineBooking.delete("/deleteBooking/:id", DeleteBooking);

module.exports = { OnlineBooking };
