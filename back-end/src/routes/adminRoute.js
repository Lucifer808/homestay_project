const adminController = require("../controllers/adminController");
const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");

router
  .route("/all-retal-registration")
  .get(
    isAuthenticatedUser,
    authrizeRoles(1),
    adminController.getAllRetalRegistration
  );
router
  .route("/all-service")
  .get(isAuthenticatedUser, authrizeRoles(1), adminController.getAllService);
router
  .route("/create-service")
  .post(isAuthenticatedUser, authrizeRoles(1), adminController.createService);
router
  .route("/update-service")
  .put(isAuthenticatedUser, authrizeRoles(1), adminController.updateService);
router
  .route("/all-type-of-service")
  .get(
    isAuthenticatedUser,
    authrizeRoles(1),
    adminController.getAllTypeOfService
  );
router
  .route("/create-type-of-service")
  .post(
    isAuthenticatedUser,
    authrizeRoles(1),
    adminController.createTypeOfService
  );
router
  .route("/update-type-of-service")
  .put(
    isAuthenticatedUser,
    authrizeRoles(1),
    adminController.updateTypeOfService
  );
router
  .route("/delete-type-of-service/:id")
  .delete(
    isAuthenticatedUser,
    authrizeRoles(1),
    adminController.deleteTypeOfService
  );
module.exports = router;
