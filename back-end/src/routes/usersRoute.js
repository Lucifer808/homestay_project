const usersController = require("../controllers/usersController");
const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");
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
module.exports = router;
