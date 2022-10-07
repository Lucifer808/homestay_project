const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
// config
dotenv.config({ path: "back-end/config/config.env" });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
// app.use(cookieParser());
// app.use(fileUpload());
// Route Users
const user = require("./routes/usersRoute");
app.use("/api/v1", user);
// Middleware handler error
app.use(errorMiddleware);
module.exports = app;
