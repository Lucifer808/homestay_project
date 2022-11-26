const db = require("../models");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { sequelize } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");
exports.customerSearch = catchAsyncError(async (req, res, next) => {
  const dayCheckIn = new Date(req.query.checkIn).getTime();
  const findAllStateOfAccommodation = await db.States.findAll({
    where: { st_name: req.query.textToSearch },
    attributes: ["st_propertyRegistrationId"],
  });
  const arrSearch = JSON.stringify(findAllStateOfAccommodation);
  const searchResult = JSON.parse(arrSearch);
  const searchResultId = searchResult.map(
    (item) => item.st_propertyRegistrationId
  );
  const fidAllAccommodation = await db.Accommodations.findAll({
    where: {
      ac_propertyRegistrationId: searchResultId,
      accommodates: { [Op.gte]: req.query.rooms },
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
