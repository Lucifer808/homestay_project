const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const cors = require("cors");
dotenv.config();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

connectDB();

let PORT = process.env.BACKEND_PORT || 6969;
app.listen(PORT, () => {
  console.log("Backend is running on", PORT);
});
