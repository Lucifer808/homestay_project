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

exports.createOrUpdateRegistraionInfo = catchAsyncError(
  async (req, res, next) => {
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
  }
);

exports.createOrUpdateRegistraionLocation = catchAsyncError(
  async (req, res, next) => {
    const {
      selectCountry,
      selectState,
      city,
      address,
      propertyRegistrationId,
    } = req.body;
    const createNewAccommodationsLocation = await db.Accommodations.update(
      {
        address,
      },
      { where: { ac_propertyRegistrationId: propertyRegistrationId } }
    );
    if (!createNewAccommodationsLocation) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm mới địa chỉ !", 401));
    }

    const foundCountryInfo = await db.Countries.findOne({
      where: { ct_propertyRegistrationId: propertyRegistrationId },
    });
    if (!foundCountryInfo) {
      const createNewCountriesInfo = await db.Countries.create({
        name: selectCountry,
        ct_propertyRegistrationId: propertyRegistrationId,
      });
      if (!createNewCountriesInfo) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi thêm mới quốc gia !", 401)
        );
      }
    } else {
      const updateCountriesInfo = await db.Countries.update(
        {
          name: selectCountry,
        },
        { where: { ct_propertyRegistrationId: propertyRegistrationId } }
      );
      if (!updateCountriesInfo) {
        return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
      }
    }

    const foundStateInfo = await db.States.findOne({
      where: { st_propertyRegistrationId: propertyRegistrationId },
    });
    if (!foundStateInfo) {
      const createNewStatesInfo = await db.States.create({
        name: selectState,
        st_propertyRegistrationId: propertyRegistrationId,
      });
      if (!createNewStatesInfo) {
        return next(new ErrorHandler("Xảy ra lỗi khi thêm mới tỉnh !", 401));
      }
    } else {
      const updateStatesInfo = await db.States.update(
        {
          name: selectState,
        },
        { where: { st_propertyRegistrationId: propertyRegistrationId } }
      );
      if (!updateStatesInfo) {
        return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
      }
    }

    const foundCityInfo = await db.Cities.findOne({
      where: { ci_propertyRegistrationId: propertyRegistrationId },
    });
    if (!foundCityInfo) {
      const createNewCitiesInfo = await db.Cities.create({
        name: city,
        ci_propertyRegistrationId: propertyRegistrationId,
      });
      if (!createNewCitiesInfo) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi thêm mới thành phố !", 401)
        );
      }
    } else {
      const updateCitiesInfo = await db.Cities.update(
        {
          name: city,
        },
        { where: { ci_propertyRegistrationId: propertyRegistrationId } }
      );
      if (!updateCitiesInfo) {
        return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
      }
    }
    res.status(200).json("Thêm thành công");
  }
);

exports.createOrUpdateRegistraionDesc = catchAsyncError(
  async (req, res, next) => {
    const createNewAccommodationsDesc = await db.Accommodations.update(
      req.body,
      { where: { ac_propertyRegistrationId: req.body.propertyRegistrationId } }
    );
    if (!createNewAccommodationsDesc) {
      return next(
        new ErrorHandler("Xảy ra lỗi khi thêm mới thông tin chi tiết !", 401)
      );
    }
    res.status(200).json("Thêm thành công");
  }
);

exports.userGetAllService = catchAsyncError(async (req, res, next) => {
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
