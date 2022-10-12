const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(fileUpload());
// Route Users
const user = require("./routes/usersRoute");
app.use("/api/v1", user);
// Middleware handler error
app.use(errorMiddleware);
module.exports = app;
