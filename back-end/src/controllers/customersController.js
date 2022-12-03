const db = require("../models");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { sequelize } = require("../models");
const moment = require("moment");
const sendEmail = require("../utils/sendEmail");
const { Op } = require("sequelize");
exports.customerSearch = catchAsyncError(async (req, res, next) => {
  const dayCheckIn = new Date(req.query.checkIn).getTime();
  const findAllStateOfAccommodation = await db.Cities.findAll({
    where: { ci_name: { [Op.like]: `%${req.query.textToSearch}%` } },
    attributes: ["ci_propertyRegistrationId"],
  });
  const arrSearch = JSON.stringify(findAllStateOfAccommodation);
  const searchResult = JSON.parse(arrSearch);
  const searchResultId = searchResult.map(
    (item) => item.ci_propertyRegistrationId
  );
  const fidAllAccommodation = await db.Accommodations.findAll({
    where: {
      ac_propertyRegistrationId: searchResultId,
      // accommodates: { [Op.gte]: req.query.rooms },
      // activeAt: { [Op.gte]: dayCheckIn },
      isActive: true,
    },
    include: [
      {
        model: db.RetalRegistration,
        as: "acrr_id",
      },
      {
        model: db.Images,
        as: "acim_id",
        where: { im_propertyRegistrationId: searchResultId },
      },
      {
        model: db.DetailServicesOfAccoomadations,
        as: "acdas_id",
        where: { dsa_propertyRegistrationId: searchResultId },
        attributes: ["dsa_sv"],
        include: [
          {
            model: db.Services,
            as: "dsasv_id",
          },
        ],
      },
      {
        model: db.TypeOfRooms,
        as: "trac_id",
        where: { tr_propertyRegistrationId: searchResultId },
        include: [
          {
            model: db.RoomPrices,
            as: "trrp_id",
          },
          {
            model: db.TypeOfRoomImages,
            as: "trtri_id",
          },
          {
            model: db.Room,
            as: "trro_id",
          },
          {
            model: db.RoomTypeOfBed,
            as: "tbrtr_id",
          },
        ],
      },
      {
        model: db.Cities,
        as: "acci_id",
        where: { ci_propertyRegistrationId: searchResultId },
        attributes: ["id", "name"],
      },
      {
        model: db.States,
        as: "acst_id",
        where: { st_propertyRegistrationId: searchResultId },
        attributes: ["id", "name"],
      },
      {
        model: db.Countries,
        as: "acct_id",
        where: { ct_propertyRegistrationId: searchResultId },
        attributes: ["id", "name"],
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
      "activeAt",
      "disabledAt",
      "isActive",
      "createdAt",
      "updatedAt",
      "createdById",
      "updatedById",
      "ac_propertyRegistrationId",
      "ac_latitude",
      "ac_longtitude",
      "ac_latlong",
    ],
    subQuery: false,
    nest: true,
    raw: false,
  });
  if (!fidAllAccommodation) {
    return next(new ErrorHandler("Xảy ra lỗi khi tìm kiếm !", 401));
  }
  res.status(200).json(fidAllAccommodation);
});

exports.customerGetDetailAccommodation = catchAsyncError(
  async (req, res, next) => {
    const id = req.params.id;
    const findDetailAccommodation = await db.Accommodations.findAll({
      where: {
        ac_propertyRegistrationId: id,
      },
      include: [
        {
          model: db.RetalRegistration,
          as: "acrr_id",
        },
        {
          model: db.Images,
          as: "acim_id",
          where: { im_propertyRegistrationId: id },
        },
        {
          model: db.DetailServicesOfAccoomadations,
          as: "acdas_id",
          where: { dsa_propertyRegistrationId: id },
          attributes: ["dsa_sv"],
          include: [
            {
              model: db.Services,
              as: "dsasv_id",
            },
          ],
        },
        {
          model: db.Cities,
          as: "acci_id",
          where: { ci_propertyRegistrationId: id },
          attributes: ["id", "name"],
        },
        {
          model: db.States,
          as: "acst_id",
          where: { st_propertyRegistrationId: id },
          attributes: ["id", "name"],
        },
        {
          model: db.Countries,
          as: "acct_id",
          where: { ct_propertyRegistrationId: id },
          attributes: ["id", "name"],
        },
        {
          model: db.TypeOfRooms,
          as: "trac_id",
          where: { tr_propertyRegistrationId: id },
          include: [
            {
              model: db.RoomPrices,
              as: "trrp_id",
            },
            {
              model: db.TypeOfRoomImages,
              as: "trtri_id",
            },
            {
              model: db.Room,
              as: "trro_id",
            },
            {
              model: db.RoomTypeOfBed,
              as: "tbrtr_id",
            },
          ],
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
        "activeAt",
        "disabledAt",
        "isActive",
        "createdAt",
        "updatedAt",
        "createdById",
        "updatedById",
        "ac_propertyRegistrationId",
      ],
      subQuery: false,
      nest: true,
      raw: false,
    });
    if (!findDetailAccommodation) {
      return next(new ErrorHandler("Xảy ra lỗi khi tìm kiếm !", 401));
    }
    res.status(200).json(findDetailAccommodation);
  }
);

exports.customerGetDetailAccommodationAndRoom = catchAsyncError(
  async (req, res, next) => {
    const { propertyRegistrationId, roomTypeId } = req.body;
    const findDetailAccommodation = await db.Accommodations.findAll({
      where: {
        ac_propertyRegistrationId: propertyRegistrationId,
      },
      include: [
        {
          model: db.RetalRegistration,
          as: "acrr_id",
        },
        {
          model: db.Images,
          as: "acim_id",
          where: { im_propertyRegistrationId: propertyRegistrationId },
        },
        {
          model: db.DetailServicesOfAccoomadations,
          as: "acdas_id",
          where: { dsa_propertyRegistrationId: propertyRegistrationId },
          attributes: ["dsa_sv"],
          include: [
            {
              model: db.Services,
              as: "dsasv_id",
            },
          ],
        },
        {
          model: db.Cities,
          as: "acci_id",
          where: { ci_propertyRegistrationId: propertyRegistrationId },
          attributes: ["id", "name"],
        },
        {
          model: db.States,
          as: "acst_id",
          where: { st_propertyRegistrationId: propertyRegistrationId },
          attributes: ["id", "name"],
        },
        {
          model: db.Countries,
          as: "acct_id",
          where: { ct_propertyRegistrationId: propertyRegistrationId },
          attributes: ["id", "name"],
        },
        {
          model: db.TypeOfRooms,
          as: "trac_id",
          where: { tr_roomTypeId: roomTypeId },
          include: [
            {
              model: db.RoomPrices,
              as: "trrp_id",
            },
            {
              model: db.TypeOfRoomImages,
              as: "trtri_id",
            },
            {
              model: db.Room,
              as: "trro_id",
            },
            {
              model: db.RoomTypeOfBed,
              as: "tbrtr_id",
            },
          ],
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
        "activeAt",
        "disabledAt",
        "isActive",
        "createdAt",
        "updatedAt",
        "createdById",
        "updatedById",
        "ac_propertyRegistrationId",
      ],
      subQuery: false,
      nest: true,
      raw: false,
    });
    if (!findDetailAccommodation) {
      return next(new ErrorHandler("Xảy ra lỗi khi tìm kiếm !", 401));
    }
    res.status(200).json(findDetailAccommodation);
  }
);

exports.getRoomDetailById = catchAsyncError(async (req, res, next) => {
  const { roomTypeId } = req.body;
  const findDetailRoomByid = await db.TypeOfRooms.findAll({
    where: {
      tr_roomTypeId: roomTypeId,
    },
    include: [
      {
        model: db.RoomPrices,
        as: "trrp_id",
      },
      {
        model: db.TypeOfRoomImages,
        as: "trtri_id",
      },
      {
        model: db.Room,
        as: "trro_id",
      },
      {
        model: db.RoomTypeOfBed,
        as: "tbrtr_id",
      },
    ],
    attributes: [
      "id",
      "name",
      "isActive",
      "createdAt",
      "updatedAt",
      "tr_roomTypeId",
    ],
    subQuery: false,
    nest: true,
    raw: false,
  });
  if (!findDetailRoomByid) {
    return next(new ErrorHandler("Xảy ra lỗi khi tìm kiếm !", 401));
  }
  res.status(200).json(findDetailRoomByid);
});

exports.customerConfirmOrder = catchAsyncError(async (req, res, next) => {
  try {
    await sendEmail({
      email: req.user.email,
      subject: `Xác nhận đơn đặt phòng`,
    });
    res.status(200).json({
      success: true,
      message: `Email xác thực tài khoản đã được gửi đến ${req.user.email}!`,
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});

exports.customerCreateOrder = catchAsyncError(async (req, res, next) => {
  const {
    userName,
    userEmail,
    userPhoneNumber,
    userRegion,
    smoke,
    bed,
    message,
  } = req.body.orderInfo;
  const {
    priceBase,
    priceExactly,
    priceTotal,
    checkIn,
    checkOut,
    numOfDays,
    numOfRoom,
    numOfAudlts,
    numOfChildrens,
    propertyRegistrationId,
    roomTypeId,
  } = req.body.bookingInfo;
  const newOrder = await db.Orders.create({
    phoneNumber: userPhoneNumber,
    smoke,
    bed,
    message,
    total: priceTotal,
    checkIn: new Date(checkIn),
    checkOut: new Date(checkOut),
    numOfDays,
    numOfRooms: numOfRoom,
    numOfAudlts,
    numOfChildrens,
    createdById: req.user.id,
    uo_propertyRegistrationId: propertyRegistrationId,
    uo_roomTypeId: roomTypeId,
  });
  if (!newOrder) {
    return next(new ErrorHandler("Xảy ra lỗi khi thêm đơn hàng mới !", 401));
  }
  res.status(200).json("Đặt phòng thành công !");
});
