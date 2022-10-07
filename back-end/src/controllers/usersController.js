const db = require("../models/index");
const usersService = require("../service/usersService");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  let users = await db.users.findAll();
  if (!users) {
    return next(new ErrorHandler("Người dùng không tồn tại", 401));
  }
  res.status(200).json({ success: true, users: users });
});
