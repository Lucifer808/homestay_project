const db = require("../models/index");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
require("dotenv").config();
exports.getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.users.findByPk(2);
      if (!res) {
        resolve;
      }
      resolve({
        data: res,
      });
    } catch (error) {
      reject(error);
    }
  });
};
