const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const db = require("../models/index");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Vui lòng đăng nhập!"), 401);
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await db.Users.findByPk(decodeData.id);

  next();
});

exports.authrizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(
        new ErrorHandler(
          `Người dùng ${req.user.role} không có quyền truy cập vào trang. Xin vui lòng quay lại!`,
          403
        )
      );
    }
    next();
  };
};
