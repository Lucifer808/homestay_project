const db = require("../models/index");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const fs = require("fs");
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
      roomTypeId,
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

    const foundAccommodation = await db.Accommodations.findOne({
      where: { ac_propertyRegistrationId: propertyRegistrationId },
    });
    if (!foundAccommodation) {
      const createNewAccommodationInfo = await db.Accommodations.create({
        noOfBedrooms,
        ac_ta: typeOfAccommodation,
        ac_propertyRegistrationId: propertyRegistrationId,
        createdById: req.user.id,
      });
      if (!createNewAccommodationInfo) {
        return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
      }
    } else {
      const updateAccommodationInfo = await db.Accommodations.update(
        {
          noOfBedrooms,
          ac_ta: typeOfAccommodation,
          ac_propertyRegistrationId: propertyRegistrationId,
          updatedById: req.user.id,
        },
        { where: { ac_propertyRegistrationId: propertyRegistrationId } }
      );
      if (!updateAccommodationInfo) {
        return next(new ErrorHandler("Xảy ra lỗi khi thêm mới nơi ở !", 401));
      }
    }
    const foundTypeOfRoom = await db.TypeOfRooms.findOne({
      where: { tr_roomTypeId: roomTypeId },
    });
    if (!foundTypeOfRoom) {
      const createTypeOfRoom = await db.TypeOfRooms.create({
        isActive: true,
        tr_propertyRegistrationId: propertyRegistrationId,
        tr_roomTypeId: roomTypeId,
      });
      if (!createTypeOfRoom) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi tạo thêm loại phòng", 401)
        );
      }
    }
    const foundRoom = await db.Room.findOne({
      where: { ro_roomTypeId: roomTypeId },
    });
    if (!foundRoom) {
      const createRoom = await db.Room.create({
        area: sizeSqm,
        numTypeOfRoom: accommodates,
        noOfAdult: accommodates,
        noOfBathrooms: noOfBathrooms,
        allowChildren: true,
        ro_propertyRegistrationId: propertyRegistrationId,
        ro_roomTypeId: roomTypeId,
      });
      if (!createRoom) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi tạo thêm loại phòng", 401)
        );
      }
    } else {
      const updatedRoom = await db.Room.update(
        {
          area: sizeSqm,
          numTypeOfRoom: accommodates,
          noOfAdult: accommodates,
          noOfBathrooms: noOfBathrooms,
          allowChildren: true,
        },
        {
          where: { ro_roomTypeId: roomTypeId },
        }
      );
      if (!updatedRoom) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi sửa thêm loại phòng", 401)
        );
      }
    }
    const createNewRoomInfo = await db.RoomTypeOfBed.bulkCreate(
      bedConfiguaration,
      {
        updateOnDuplicate: ["tbr_roomTypeId"],
      }
    );
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

exports.createOrUpdateRegistraionServices = catchAsyncError(
  async (req, res, next) => {
    const [...services] = req.body;
    const propertyRegistrationIdInside = req.params.p;
    const foundServiceOfAccommodations =
      db.DetailServicesOfAccoomadations.findOne({
        where: { dsa_propertyRegistrationId: propertyRegistrationIdInside },
      });
    if (!foundServiceOfAccommodations) {
      const createNewAccommodationsServices =
        await db.DetailServicesOfAccoomadations.bulkCreate(services);
      if (!createNewAccommodationsServices) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi thêm mới thông tin chi tiết !", 401)
        );
      }
    } else {
      await db.DetailServicesOfAccoomadations.destroy({
        where: { dsa_propertyRegistrationId: propertyRegistrationIdInside },
      });
      const createNewAccommodationsServices =
        await db.DetailServicesOfAccoomadations.bulkCreate(services);
      if (!createNewAccommodationsServices) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi thêm mới thông tin chi tiết !", 401)
        );
      }
    }
    res.status(200).json("Thêm thành công");
  }
);

exports.createOrUpdateRegistraionPriceSetup = catchAsyncError(
  async (req, res, next) => {
    const { priceFrom, fristDiscount, paymentMethod, propertyRegistrationId } =
      req.body;
    const discountCheck = fristDiscount === true ? 1 : 0;
    const priceAccomodation = db.Accommodations.update(
      {
        priceBase: priceFrom,
      },
      {
        where: { ac_propertyRegistrationId: propertyRegistrationId },
      }
    );
    const foundRoomTypeId = await db.TypeOfRooms.findOne({
      where: { tr_propertyRegistrationId: propertyRegistrationId },
    });
    const foundRoomPrices = db.RoomPrices.findOne({
      where: { rp_propertyRegistrationId: propertyRegistrationId },
    });
    if (!foundRoomPrices) {
      const createNewRoomPrices = await db.RoomPrices.create({
        price: priceFrom,
        minPrice: priceFrom,
        maxPrice: priceFrom,
        active: 1,
        rp_propertyRegistrationId: propertyRegistrationId,
        rp_roomTypeId: foundRoomTypeId.tr_roomTypeId,
      });
      if (!createNewRoomPrices) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi thêm mới thông tin giá !", 401)
        );
      }
    } else {
      await db.RoomPrices.update(
        { active: 0 },
        {
          where: { rp_propertyRegistrationId: propertyRegistrationId },
        }
      );
      const createNewRoomPrices = await db.RoomPrices.create({
        price: priceFrom,
        minPrice: priceFrom,
        maxPrice: priceFrom,
        active: 1,
        rp_propertyRegistrationId: propertyRegistrationId,
        rp_roomTypeId: foundRoomTypeId.tr_roomTypeId,
      });
      if (!createNewRoomPrices) {
        return next(
          new ErrorHandler("Xảy ra lỗi khi thêm mới thông tin giá!", 401)
        );
      }
    }
    const updateAccommodationPriceSetup = await db.Accommodations.update(
      {
        priceBase: priceFrom,
        paymentMethod: paymentMethod,
        ac_dc: discountCheck,
      },
      {
        where: { ac_propertyRegistrationId: propertyRegistrationId },
      }
    );
    if (!updateAccommodationPriceSetup) {
      return next(
        new ErrorHandler(
          "Xảy ra lỗi khi thêm mới thông tin khuyến mãi chỗ nghỉ!",
          401
        )
      );
    }
    res.status(200).json("Thêm thành công");
  }
);

exports.createOrUpdateRegistraionImages = catchAsyncError(
  async (req, res, next) => {
    const descsArr = req.body.descs.map((item) => JSON.parse(item));
    console.log("object");
    const imagesArr = req.files;
    const result = [];
    const roomImage = [];
    for (let i = 0; i < imagesArr.length; i++) {
      result.push({
        type: imagesArr[i].mimetype,
        name: imagesArr[i].originalname,
        path: imagesArr[i].path,
        desc: descsArr[i].title,
        im_propertyRegistrationId: req.body.propertyRegistrationId,
      });
    }
    const createNewImages = await db.Images.bulkCreate(result);
    if (!createNewImages) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm hình ảnh !", 401));
    }
    const findRoomTypeId = await db.TypeOfRooms.findOne({
      where: { tr_propertyRegistrationId: req.body.propertyRegistrationId },
    });
    for (let i = 0; i < 3; i++) {
      roomImage.push({
        type: imagesArr[i].mimetype,
        name: imagesArr[i].originalname,
        path: imagesArr[i].path,
        tri_roomTypeId: findRoomTypeId.tr_roomTypeId,
      });
    }
    const createNewTypeOfRoomImage = db.TypeOfRoomImages.bulkCreate(roomImage);
    if (!createNewTypeOfRoomImage) {
      return next(
        new ErrorHandler("Xảy ra lỗi khi thêm hình ảnh loại phòng !", 401)
      );
    }
    res.status(200).json("Thêm hình ảnh thành công");
  }
);

exports.createOrUpdateRegistraionFile = catchAsyncError(
  async (req, res, next) => {
    const {
      firstName,
      lastName,
      nickName,
      dayOfBirth,
      monthOfBirth,
      yearOfBirth,
      national,
      phoneNumber,
      email,
      selectCountry,
      selectState,
      selectCity,
      address,
      zipCode,
      desc,
      propertyRegistrationId,
    } = req.body;
    const dateOfBirth = dayOfBirth
      .concat("/", monthOfBirth.split(" ")[1])
      .concat("/", yearOfBirth);
    const updateUserFile = await db.Users.update(
      {
        userName: nickName,
        firstName,
        lastName,
        address,
        phoneNumber,
        dateOfBirth,
        national,
      },
      {
        where: { us_id: req.user.id },
      }
    );
    if (!updateUserFile) {
      return next(new ErrorHandler("Xảy ra lỗi khi cập nhật thông tin !"));
    }

    const createUpdateAccommodation = await db.Accommodations.update(
      {
        welcome: desc,
      },
      {
        where: { ac_propertyRegistrationId: propertyRegistrationId },
      }
    );

    if (!createUpdateAccommodation) {
      return next(
        new ErrorHandler("Xảy ra lỗi khi cập nhật mô tả thông tin !")
      );
    }
    // Country
    const foundUserCountry = await db.UserCountries.findOne({
      where: { urc_us: req.user.id },
    });
    if (!foundUserCountry) {
      const createUserCountries = db.UserCountries.create({
        name: selectCountry,
      });
      if (!createUserCountries) {
        return next(new ErrorHandler("Xảy ra lỗi thêm quốc gia !"));
      }
    } else {
      const updateUserCountries = db.UserCountries.update(
        {
          name: selectCountry,
        },
        {
          where: { urc_us: req.user.id },
        }
      );
      if (!updateUserCountries) {
        return next(new ErrorHandler("Xảy ra lỗi thêm quốc gia !"));
      }
    }

    // State
    const foundUserState = await db.UserStates.findOne({
      where: { urs_us: req.user.id },
    });
    if (!foundUserState) {
      const createUserStates = db.UserStates.create({
        name: selectState,
      });
      if (!createUserStates) {
        return next(new ErrorHandler("Xảy ra lỗi thêm tỉnh/thành !"));
      }
    } else {
      const updateUserStates = db.UserStates.update(
        {
          name: selectState,
        },
        {
          where: { urs_us: req.user.id },
        }
      );
      if (!updateUserStates) {
        return next(new ErrorHandler("Xảy ra lỗi thêm tỉnh/thành !"));
      }
    }

    // City
    const foundUserCity = await db.UserCities.findOne({
      where: { urci_us: req.user.id },
    });
    if (!foundUserCity) {
      const createUserCities = db.UserCities.create({
        name: selectCity,
      });
      if (!createUserCities) {
        return next(new ErrorHandler("Xảy ra lỗi thêm tỉnh/thành !"));
      }
    } else {
      const updateUserCities = db.UserCities.update(
        {
          name: selectCity,
        },
        {
          where: { urci_us: req.user.id },
        }
      );
      if (!updateUserCities) {
        return next(new ErrorHandler("Xảy ra lỗi thêm tỉnh/thành !"));
      }
    }

    const updateStatus = await db.RetalRegistration.update(
      {
        status: "Đang chờ duyệt",
      },
      {
        where: { rr_propertyRegistrationId: propertyRegistrationId },
      }
    );
    if (!updateStatus) {
      return next(
        new ErrorHandler("Xảy ra lỗi khi thay đổi trạng thái !", 401)
      );
    }
    res.status(200).json("Thêm hồ sơ thành công !");
  }
);

exports.userGetAllAccommodation = catchAsyncError(async (req, res, next) => {
  const userGetAllAccommodation = await db.Accommodations.findAll({
    where: {
      createdById: req.user.id,
      isActive: true,
    },
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
      "ac_latlong",
    ],
    nest: true,
    raw: false,
  });
  if (!userGetAllAccommodation) {
    return next(new ErrorHandler("Xảy ra lỗi khi tìm kiếm theo mã !", 401));
  }
  res.status(200).json(userGetAllAccommodation);
});

exports.createNewRoomInfo = catchAsyncError(async (req, res, next) => {
  const roomInfo = JSON.parse(req.body.info);
  const bedConfig = JSON.parse(req.body.bedConfig);
  const roomTypeId = req.body.roomTypeId;
  const foundTypeOfRoom = await db.TypeOfRooms.findOne({
    where: { tr_roomTypeId: roomTypeId },
  });
  if (!foundTypeOfRoom) {
    const createTypeOfRoom = await db.TypeOfRooms.create({
      name: roomInfo.nameTypeOfRoom,
      isActive: true,
      tr_propertyRegistrationId: req.body.ac_propertyRegistrationId,
      tr_roomTypeId: roomTypeId,
    });
    if (!createTypeOfRoom) {
      return next(new ErrorHandler("Xảy ra lỗi khi tạo thêm loại phòng", 401));
    }
  } else {
    const updatedTypeOfRoom = await db.TypeOfRooms.update(
      {
        name: roomInfo.nameTypeOfRoom,
      },
      {
        where: { tr_roomTypeId: roomTypeId },
      }
    );
    if (!updatedTypeOfRoom) {
      return next(new ErrorHandler("Xảy ra lỗi khi sửa thêm loại phòng", 401));
    }
  }
  const foundRoom = await db.Room.findOne({
    where: { ro_roomTypeId: roomTypeId },
  });
  if (!foundRoom) {
    const createRoom = await db.Room.create({
      noOfAdult: roomInfo.numOfAdult,
      noOfChildren: roomInfo.numOfChildren,
      allowChildren: roomInfo.allowChildren,
      area: roomInfo.areaOfTypeRoom,
      viewOfRoom: roomInfo.viewOfTypeRoom,
      numTypeOfRoom: roomInfo.numTypeOfRoom,
      noOfBathrooms: roomInfo.numOfBathrooms,
      ro_propertyRegistrationId: req.body.ac_propertyRegistrationId,
      ro_roomTypeId: roomTypeId,
    });
    if (!createRoom) {
      return next(new ErrorHandler("Xảy ra lỗi khi tạo thêm loại phòng", 401));
    }
  } else {
    const updatedRoom = await db.Room.update(
      {
        noOfAdult: roomInfo.numOfAdult,
        noOfChildren: roomInfo.numOfChildren,
        allowChildren: roomInfo.allowChildren,
        area: roomInfo.areaOfTypeRoom,
        viewOfRoom: roomInfo.viewOfTypeRoom,
        numTypeOfRoom: roomInfo.numTypeOfRoom,
        noOfBathrooms: roomInfo.numOfBathrooms,
      },
      {
        where: { ro_roomTypeId: roomTypeId },
      }
    );
    if (!updatedRoom) {
      return next(new ErrorHandler("Xảy ra lỗi khi sửa thêm loại phòng", 401));
    }
  }
  if (bedConfig.firstRoom.length >= 1) {
    const createNewRoomInfo = await db.RoomTypeOfBed.bulkCreate(
      bedConfig.firstRoom,
      {
        updateOnDuplicate: ["tbr_roomTypeId"],
      }
    );
    if (!createNewRoomInfo) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm mới phòng !", 401));
    }
  }
  if (bedConfig.seccondRoom.length >= 1) {
    const createNewRoomInfo = await db.RoomTypeOfBed.bulkCreate(
      bedConfig.seccondRoom,
      {
        updateOnDuplicate: ["tbr_roomTypeId"],
      }
    );
    if (!createNewRoomInfo) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm mới phòng !", 401));
    }
  }
  const imagesArr = req.files;
  const result = [];
  for (let i = 0; i < imagesArr.length; i++) {
    result.push({
      type: imagesArr[i].mimetype,
      name: imagesArr[i].originalname,
      path: imagesArr[i].path,
      tri_roomTypeId: roomTypeId,
    });
  }
  const createNewImages = await db.TypeOfRoomImages.bulkCreate(result);
  if (!createNewImages) {
    return next(new ErrorHandler("Xảy ra lỗi khi thêm hình ảnh !", 401));
  }
  const foundRoomPrice = await db.RoomPrices.findOne({
    where: { rp_roomTypeId: roomTypeId },
  });
  if (!foundRoomPrice) {
    const createNewPrice = await db.RoomPrices.create({
      price: roomInfo.exactlyPrice,
      minPrice: roomInfo.minPrice,
      maxPrice: roomInfo.maxPrice,
      active: true,
      rp_propertyRegistrationId: req.body.ac_propertyRegistrationId,
      rp_roomTypeId: roomTypeId,
    });
    if (!createNewPrice) {
      return next(new ErrorHandler("Xảy ra lỗi khi thêm giá !", 401));
    }
  } else {
    const updatedRoomPrice = await db.RoomPrices.update(
      {
        price: roomInfo.exactlyPrice,
        minPrice: roomInfo.minPrice,
        maxPrice: roomInfo.maxPrice,
      },
      {
        where: { rp_roomTypeId: roomTypeId },
      }
    );
    if (!updatedRoomPrice) {
      return next(new ErrorHandler("Xảy ra lỗi khi sửa thêm giá phòng", 401));
    }
  }
  res.status(200).json("Thêm phòng mới thành công !");
});

exports.getAllTypeRoom = catchAsyncError(async (req, res, next) => {
  const getAllTypeRoom = await db.TypeOfRooms.findAll({
    where: {
      tr_propertyRegistrationId: req.body.propertyRegistrationId,
      isActive: true,
    },
    include: [
      {
        model: db.Room,
        as: "trro_id",
      },
    ],
    attributes: [
      "id",
      "name",
      "isActive",
      "tr_propertyRegistrationId",
      "tr_roomTypeId",
    ],
  });
  res.status(200).json(getAllTypeRoom);
});

exports.getAllTypeRoomById = catchAsyncError(async (req, res, next) => {
  const getAllTypeRoomById = await db.TypeOfRooms.findOne({
    where: {
      tr_roomTypeId: req.body.roomTypeId,
    },
    include: [
      {
        model: db.Room,
        as: "trro_id",
      },
    ],
    attributes: [
      "id",
      "name",
      "isActive",
      "tr_propertyRegistrationId",
      "tr_roomTypeId",
    ],
  });
  res.status(200).json(getAllTypeRoomById);
});
exports.getAllAccommodationsOrder = catchAsyncError(async (req, res, next) => {
  const getAllAccommodationsOrder = await db.Orders.findAll({
    where: { uo_propertyRegistrationId: req.body.propertyRegistrationId },
  });
  res.status(200).json(getAllAccommodationsOrder);
});
