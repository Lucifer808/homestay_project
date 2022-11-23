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
      activeAt: { [Op.lte]: dayCheckIn },
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
  });
  const findImagesAccommodations = await db.Images.findAll({
    where: {
      im_propertyRegistrationId: searchResultId,
    },
  });
  res.status(200).json(fidAllAccommodation);
});
