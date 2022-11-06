const db = require("../models");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { sequelize } = require("../models");
exports.getAllRetalRegistration = catchAsyncError(async (req, res, next) => {
  let allRetalRegistration = await db.UserRetalRegistration.findAll({
    include: [
      {
        model: db.Users,
        as: "rr_userId",
        include: [
          {
            model: db.UserRole,
            as: "uuid",
          },
        ],
      },
    ],
    attributes: [
      "id",
      "name",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "rr_user",
    ],
    nest: true,
    raw: false,
  });
  if (!allRetalRegistration) {
    return next(new ErrorHandler("Không có đơn đăng ký nào", 401));
  }
  res.status(200).json(allRetalRegistration);
});

exports.getAllService = catchAsyncError(async (req, res, next) => {
  let allService = await db.UserServices.findAll({
    include: [
      {
        model: db.UserTypeOfServices,
        as: "svts_id",
      },
    ],
    attributes: [
      "id",
      "name",
      "desc",
      "active",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "sv_ts",
    ],
    nest: true,
    raw: false,
  });
  if (!allService) {
    return next(new ErrorHandler("Không có dịch vụ nào", 401));
  }
  res.status(200).json(allService);
});

exports.createService = catchAsyncError(async (req, res, next) => {
  let createService = await db.UserServices.create({
    ...req.body,
    createdById: req.user.id,
  });
  if (!createService) {
    return next(new ErrorHandler("Xảy ra lỗi khi tạo!", 401));
  }
  res.status(200).json(createService);
});

exports.updateService = catchAsyncError(async (req, res, next) => {
  let updateService = await db.UserServices.update(
    {
      ...req.body,
      updatedAt: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      updatedById: req.user.id,
    },
    {
      where: { id: req.body.id },
    }
  );
  if (!updateService) {
    return next(new ErrorHandler("Xảy ra lỗi khi cập nhật!", 401));
  }
  res.status(200).json({ success: true });
});

exports.getAllTypeOfService = catchAsyncError(async (req, res, next) => {
  let allTypeOfService = await db.UserTypeOfServices.findAll({
    attributes: [
      "id",
      "name",
      "desc",
      "active",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
    ],
    nest: true,
    raw: false,
  });
  if (!allTypeOfService) {
    return next(new ErrorHandler("Không có loại dịch vụ nào", 401));
  }
  res.status(200).json(allTypeOfService);
});

exports.createTypeOfService = catchAsyncError(async (req, res, next) => {
  let createTypeOfService = await db.UserTypeOfServices.create({
    ...req.body,
    createdById: req.user.id,
  });
  if (!createTypeOfService) {
    return next(new ErrorHandler("Xảy ra lỗi khi tạo!", 401));
  }
  res.status(200).json(createTypeOfService);
});

exports.updateTypeOfService = catchAsyncError(async (req, res, next) => {
  let updateTypeOfService = await db.UserTypeOfServices.update(
    {
      ...req.body,
      updatedAt: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      updatedById: req.user.id,
    },
    {
      where: { id: req.body.id },
    }
  );
  if (!updateTypeOfService) {
    return next(new ErrorHandler("Xảy ra lỗi khi cập nhật!", 401));
  }
  res.status(200).json({ success: true });
});

exports.deleteTypeOfService = catchAsyncError(async (req, res, next) => {
  let updateTypeOfService = await db.UserTypeOfServices.destroy({
    where: { id: req.params.id },
  });
  if (!updateTypeOfService) {
    return next(new ErrorHandler("Xảy ra lỗi khi xóa!", 401));
  }
  res.status(200).json({ success: true });
});

exports.getAllTypeOfAccommodation = catchAsyncError(async (req, res, next) => {
  let allTypeOfAccommodation = await db.userTypeOfAccommodations.findAll({
    include: [
      {
        model: db.userTypeOfAccommodationsHeader,
        as: "thta_id",
      },
    ],
    attributes: [
      "id",
      "name",
      "desc",
      "active",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "ta_th",
    ],
    nest: true,
    raw: false,
  });
  if (!allTypeOfAccommodation) {
    return next(new ErrorHandler("Không có loại chỗ nghỉ nào", 401));
  }
  res.status(200).json(allTypeOfAccommodation);
});

exports.getAllTypeOfAccommodationHeader = catchAsyncError(
  async (req, res, next) => {
    let AllTypeOfAccommodationHeader =
      await db.userTypeOfAccommodationsHeader.findAll({
        attributes: [
          "id",
          "name",
          "createdAt",
          "updatedAt",
          "createdById",
          "updatedById",
        ],
        nest: true,
        raw: false,
      });
    if (!AllTypeOfAccommodationHeader) {
      return next(new ErrorHandler("Không có loại người dùng nào", 401));
    }
    res.status(200).json(AllTypeOfAccommodationHeader);
  }
);

exports.createTypeOfAccommodation = catchAsyncError(async (req, res, next) => {
  let createTypeOfAccommodation = await db.userTypeOfAccommodations.create({
    ...req.body,
    createdById: req.user.id,
  });
  if (!createTypeOfAccommodation) {
    return next(new ErrorHandler("Xảy ra lỗi khi tạo!", 401));
  }
  res.status(200).json(createTypeOfAccommodation);
});

exports.updateTypeOfAccommodation = catchAsyncError(async (req, res, next) => {
  let updateTypeOfAccommodation = await db.userTypeOfAccommodations.update(
    {
      ...req.body,
      updatedAt: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      updatedById: req.user.id,
    },
    {
      where: { id: req.body.id },
    }
  );
  if (!updateTypeOfAccommodation) {
    return next(new ErrorHandler("Xảy ra lỗi khi cập nhật!", 401));
  }
  res.status(200).json({ success: true });
});

exports.getAllAccommodation = catchAsyncError(async (req, res, next) => {
  let allAccommodation = await db.userAccommodations.findAll({
    include: [
      {
        model: db.userTypeOfAccommodations,
        as: "acta_id",
      },
    ],
    attributes: [
      "id",
      "name",
      "address",
      "rating",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "ac_ta",
    ],
    nest: true,
    raw: false,
  });
  if (!allAccommodation) {
    return next(new ErrorHandler("Không có chỗ nghỉ nào", 401));
  }
  res.status(200).json(allAccommodation);
});
