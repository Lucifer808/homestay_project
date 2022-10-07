const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
dotenv.config();

connectDB();

let PORT = process.env.BACKEND_PORT || 6969;
app.listen(PORT, () => {
  console.log("Backend is running on", PORT);
});
