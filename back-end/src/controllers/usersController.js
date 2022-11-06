const db = require("../models/index");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  let users = await db.Users.findAll({
    include: [
      {
        model: db.UserRole,
        as: "uuid",
      },
    ],
    attributes: [
      "id",
      "userName",
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "us_role",
    ],
  });
  if (!users) {
    return next(new ErrorHandler("Người dùng không tồn tại", 401));
  }
  res.status(200).json({ success: true, users: users });
});

exports.createNewUser = catchAsyncError(async (req, res, next) => {
  let user = await db.Users.create(req.body);
  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  let user = await db.Users.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return next(new ErrorHandler("Người dùng không tồn tại", 404));
  }
  if (!user.validatePassword(password)) {
    return next(new ErrorHandler("Mật khẩu không chính xác", 401));
  }
  sendToken(user, 200, res);
});

// Logout
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Đăng xuất thành công",
  });
});

exports.getUserDetail = catchAsyncError(async (req, res, next) => {
  const user = await db.Users.findByPk(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

exports.getAllBedTypeList = catchAsyncError(async (req, res, next) => {
  const allBedTypeList = await db.BedTypeList.findAll();

  res.status(200).json(allBedTypeList);
});
