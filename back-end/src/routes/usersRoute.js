const usersController = require("../controllers/usersController");
const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");
const { upload } = require("../middleware/uploadFile");
router.route("/register").post(usersController.createNewUser);
router.route("/login").post(usersController.loginUser);
router.route("/logout").get(usersController.logout);
router.route("/me").get(isAuthenticatedUser, usersController.getUserDetail);
router.route("/users").get(isAuthenticatedUser, usersController.getAllUsers);
router
  .route("/all-bed-type-list")
  .get(isAuthenticatedUser, usersController.getAllBedTypeList);
router
  .route("/create-registration-info")
  .post(isAuthenticatedUser, usersController.createOrUpdateRegistraionInfo);
router
  .route("/create-registration-location")
  .post(isAuthenticatedUser, usersController.createOrUpdateRegistraionLocation);
router
  .route("/create-registration-desc")
  .post(isAuthenticatedUser, usersController.createOrUpdateRegistraionDesc);
router
  .route("/user-get-all-service")
  .get(isAuthenticatedUser, usersController.userGetAllService);
router
  .route("/create-registration-services/:p")
  .post(isAuthenticatedUser, usersController.createOrUpdateRegistraionServices);
router
  .route("/create-registration-price-setup")
  .post(
    isAuthenticatedUser,
    usersController.createOrUpdateRegistraionPriceSetup
  );
router
  .route("/create-registration-images")
  .post(
    isAuthenticatedUser,
    upload.any(),
    usersController.createOrUpdateRegistraionImages
  );
router
  .route("/create-registration-file")
  .post(isAuthenticatedUser, usersController.createOrUpdateRegistraionFile);
router
  .route("/get-all-accommodation")
  .get(isAuthenticatedUser, usersController.userGetAllAccommodation);
router
  .route("/create-room-info")
  .post(isAuthenticatedUser, upload.any(), usersController.createNewRoomInfo);
router
  .route("/get-all-type-room")
  .post(isAuthenticatedUser, usersController.getAllTypeRoom);
router
  .route("/get-type-room-by-id")
  .post(isAuthenticatedUser, usersController.getAllTypeRoomById);
router
  .route("/get-all-order-accommodation-by-id")
  .post(isAuthenticatedUser, usersController.getAllAccommodationsOrder);
module.exports = router;
