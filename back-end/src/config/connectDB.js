const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("homestays", "root", "LongDuyst2792000", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected database succesfully!");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = connectDB;
