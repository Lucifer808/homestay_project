const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const path = require("path");
app.use(express.json());
app.use(cookieParser());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse multipart/form-data
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use("/images", express.static(path.join(__dirname, "../public/uploads")));
// app.use(express.static(__dirname + "/../public"));
// console.log(path.join(__dirname, "../public/uploads"));
// Route Users
const user = require("./routes/usersRoute");
app.use("/api/v1", user);
// Route Admin
const admin = require("./routes/adminRoute");
app.use("/api/v1", admin);
// Route Customer
const customer = require("./routes/customersRoute");
app.use("/api/v1", customer);
// Middleware handler error
app.use(errorMiddleware);
module.exports = app;
