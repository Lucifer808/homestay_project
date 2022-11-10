const db = require("../models/index");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
// async function updateOrCreate(model, where, newItem, userId) {
//   console.log(newItem);
//   // First try to find the record
//   const foundItem = await model.findOne({ where });
//   if (!foundItem) {
//     // Item not found, create a new one
//     const item = await model.create(newItem);
//     return { item, created: true };
//   }
//   // Found an item, update it
//   const item = await model.update(newItem, { where });
//   return { item, created: false };
// }
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

exports.getAllRentalRegistration = catchAsyncError(async (req, res, next) => {
  const allRentalRegistration = await db.RetalRegistration.findAll({
    where: { createdById: req.use.id },
  });

  if (!allRentalRegistration) {
    return next(new ErrorHandler("Không có đơn đăng ký nào!"), 401);
  }

  res.status(200).json(allRentalRegistration);
});

exports.createRegistraionInfo = catchAsyncError(async (req, res, next) => {
  const {
    propertyRegistrationId,
    accommodates,
    noOfBathrooms,
    noOfBedrooms,
    sizeSqm,
    typeOfAccommodation,
    bedConfiguaration,
  } = req.body;
  const foundRental = await db.RetalRegistration.findOne({
    where: { rr_propertyRegistrationId: propertyRegistrationId },
  });
  if (!foundRental) {
    const createNewRentalInfo = await db.RetalRegistration.create({
      createdById: req.user.id,
      rr_propertyRegistrationId: propertyRegistrationId,
    });
    if (!createNewRentalInfo) {
      return next(
        new ErrorHandler("Xảy ra lỗi khi thêm mới đơn đăng ký!", 401)
      );
    }
  } else {
    const updateRentalInfo = await db.RetalRegistration.update(
      {
        updatedById: req.user.id,
        rr_propertyRegistrationId: propertyRegistrationId,
      },
      { where: { rr_propertyRegistrationId: propertyRegistrationId } }
    );
    if (!updateRentalInfo) {
      return next(
        new ErrorHandler("Xảy ra lỗi khi cập nhật đơn đăng ký!", 401)
      );
    }
  }

  const foundAcommodation = await db.Accommodations.findOne({
    where: { ac_propertyRegistrationId: propertyRegistrationId },
  });
  if (!foundAcommodation) {
    const createNewAcommodationInfo = await db.Accommodations.create({
      area: sizeSqm,
      accommodates,
      noOfBedrooms,
      noOfBathrooms,
      ac_ta: typeOfAccommodation,
      ac_propertyRegistrationId: propertyRegistrationId,
      createdById: req.user.id,
    });
    if (!createNewAcommodationInfo) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
    }
  } else {
    const updateAcommodationInfo = await db.Accommodations.update(
      {
        area: sizeSqm,
        accommodates,
        noOfBedrooms,
        noOfBathrooms,
        ac_ta: typeOfAccommodation,
        ac_propertyRegistrationId: propertyRegistrationId,
        updatedById: req.user.id,
      },
      { where: { ac_propertyRegistrationId: propertyRegistrationId } }
    );
    if (!updateAcommodationInfo) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
    }
  }
  const createNewRoomInfo = await db.Room.bulkCreate(bedConfiguaration, {
    updateOnDuplicate: ["ro_propertyRegistrationId"],
  });
  if (!createNewRoomInfo) {
    return next(new ErrorHandler("Xảy ra lỗi khi thêm mới phòng !", 401));
  }
  res.status(200).json("Thêm thành công");
});

exports.updateAcommodations = catchAsyncError(async (req, res, next) => {
  const { nameOfAcommodation, desc, recommend, policy, howToGetThere, rating } =
    req.body;
});
