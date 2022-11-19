const db = require("../models");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
exports.getAllRetalRegistration = catchAsyncError(async (req, res, next) => {
  let allRetalRegistration = await db.RetalRegistration.findAll({
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
  let allService = await db.Services.findAll({
    include: [
      {
        model: db.TypeOfServices,
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
  let createService = await db.Services.create({
    ...req.body,
    createdById: req.user.id,
  });
  if (!createService) {
    return next(new ErrorHandler("Xảy ra lỗi khi tạo!", 401));
  }
  res.status(200).json(createService);
});

exports.updateService = catchAsyncError(async (req, res, next) => {
  let updateService = await db.Services.update(
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
  let allTypeOfService = await db.TypeOfServices.findAll({
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
  let createTypeOfService = await db.TypeOfServices.create({
    ...req.body,
    createdById: req.user.id,
  });
  if (!createTypeOfService) {
    return next(new ErrorHandler("Xảy ra lỗi khi tạo!", 401));
  }
  res.status(200).json(createTypeOfService);
});

exports.updateTypeOfService = catchAsyncError(async (req, res, next) => {
  let updateTypeOfService = await db.TypeOfServices.update(
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
  let updateTypeOfService = await db.TypeOfServices.destroy({
    where: { id: req.params.id },
  });
  if (!updateTypeOfService) {
    return next(new ErrorHandler("Xảy ra lỗi khi xóa!", 401));
  }
  res.status(200).json({ success: true });
});

exports.getAllTypeOfAccommodation = catchAsyncError(async (req, res, next) => {
  let allTypeOfAccommodation = await db.TypeOfAccommodations.findAll({
    include: [
      {
        model: db.TypeOfAccommodationsHeader,
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
      await db.TypeOfAccommodationsHeader.findAll({
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
  let createTypeOfAccommodation = await db.TypeOfAccommodations.create({
    ...req.body,
    createdById: req.user.id,
  });
  if (!createTypeOfAccommodation) {
    return next(new ErrorHandler("Xảy ra lỗi khi tạo!", 401));
  }
  res.status(200).json(createTypeOfAccommodation);
});

exports.updateTypeOfAccommodation = catchAsyncError(async (req, res, next) => {
  let updateTypeOfAccommodation = await db.TypeOfAccommodations.update(
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
  const getAllAccommodation = await db.Accommodations.findAll({
    include: [
      {
        model: db.RetalRegistration,
        as: "acrr_id",
      },
    ],
    attributes: [
      "id",
      "nameOfAccommodation",
      "desc",
      "rating",
      "area",
      "policy",
      "recommend",
      "howToGetThere",
      "paymentMethod",
      "priceBase",
      "accommodates",
      "noOfBedrooms",
      "noOfBathrooms",
      "address",
      "welcome",
      "returnPolicy",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "ac_propertyRegistrationId",
    ],
    nest: true,
    raw: false,
  });
  if (!getAllAccommodation) {
    return next(new ErrorHandler("Xảy ra lỗi khi lấy danh sách nơi ở"));
  }
  res.status(200).json(getAllAccommodation);
});

exports.getAllImagesById = catchAsyncError(async (req, res, next) => {
  const ac_propertyRegistrationId = req.body.ac_propertyRegistrationId;
  const getAllImagesById = await db.Images.findAll(
    {
      where: {
        im_propertyRegistrationId: {
          [Op.eq]: ac_propertyRegistrationId,
        },
      },
    },
    {
      attributes: [
        "id",
        "type",
        "name",
        "path",
        "desc",
        "im_propertyRegistrationId",
      ],
      nest: false,
      raw: false,
    }
  );
  if (!getAllImagesById) {
    return next(new ErrorHandler("Xảy ra lỗi khi lấy danh sách nơi ở"));
  }
  res.status(200).json(getAllImagesById);
});
