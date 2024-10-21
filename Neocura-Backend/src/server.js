// Initialize Express App
const express = require("express");
const app = express();
const morgan = require("morgan");
const { Server } = require("socket.io");
//Requiring Cors for access-Control-Allow-Origin
const cors = require("cors");

// Require Router
const { Router } = require("./api/routes/DocList_Route/doc_route.js");
const { BlogRouter } = require("./api/routes/Blog_Route/blog_route.js");
const { SignUpRouter } = require("./api/routes/SignUp_Route/signup_Route.js");
const { SpecRouter } = require("./api/routes/allList_Routes/allListRoute.js");
const {
  SearchBarRouter,
} = require("./api/routes/SearchBar_Route/search_bar_route.js");
const { hosRouter } = require("./api/routes/HospitalList_Route/hosRoute.js");
const { clinRouter } = require("./api/routes/indvClinic_Route/clinicRoute.js");
const { DocRouter } = require("./api/routes/Indv_Route/indvDocRoute.js");
const { NavbarRouter } = require("./api/routes/NavBar_Route/navbarRoute.js");
const { LoginRouter } = require("./api/routes/Login_Route/Login_Route.js");
const {
  OnlineBooking,
} = require("./api/routes/OnlineBooking/OnlineBooking.js");

const {
  getDoctorByIdRouter,
} = require("./api/routes/getDoctorById_Router/OnlineBooking.js");
const {
  getPatientByIdRouter,
} = require("./api/routes/getPatientById_Router/OnlineBooking.js");
const { reviewRouter } = require("./api/routes/DocReviews/docReviewRoute.js");

//Body parser midleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Require ENV variables
require("dotenv").config();

// Socket io Setup
const io = new Server({
  cors: true,
});
const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();
// First Event
io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("join-room", (data) => {
    const { roomId, Name } = data;
    console.log("User", Name, "Joined Room", roomId);
    emailToSocketMapping.set(Name, socket.id);
    socketToEmailMapping.set(socket.id, Name);
    socket.join(roomId);
    socket.emit("joined-room", { roomId });

    io.emit("user-joined", { Name });
  });
  // Second Event
  socket.on("call-user", ({ Name, offer }) => {
    const socketId = emailToSocketMapping.get(Name);
    const fromName = socketToEmailMapping.get(socket.id);
    socket.broadcast
      .to(socketId)
      .emit("incominig-call", { from: fromName, offer });
  });
  // THird Evenet
  socket.on("call-accepted", ({ from, ans }) => {
    const socketId = emailToSocketMapping.get(from);
    const fromName = socketToEmailMapping.get(socket.id);
    socket.broadcast.to(socketId).emit("call-accepted", { ans });
  });
});

// Use Routes
app.use("/", NavbarRouter);
app.use("/", Router);
app.use("/", NavbarRouter);
app.use("/", DocRouter);
app.use("/blogs", BlogRouter);
app.use("/searchBarApi", SearchBarRouter);
app.use("/", SpecRouter);
app.use("/login", LoginRouter);
app.use("/signup", SignUpRouter);
app.use("/", SearchBarRouter);
app.use("/", hosRouter);
app.use("/", clinRouter);
app.use("/", SpecRouter);
app.use("/", SpecRouter);
app.use("/getPatientById", getPatientByIdRouter);
app.use("/getDoctorById", getDoctorByIdRouter);
app.use("/onlineBooking", OnlineBooking);
app.use("/", reviewRouter);

// Setting Up Server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Listening to Port: ${port}`);
});
io.listen(8000);
module.exports = { app };
