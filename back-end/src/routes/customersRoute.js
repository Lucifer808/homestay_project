const customersController = require("../controllers/customersController");
const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");
router.route("/search").get(customersController.customerSearch);
router
  .route("/roomdetail/:id")
  .get(customersController.customerGetDetailAccommodation);
router
  .route("/accommodation_and_room")
  .post(customersController.customerGetDetailAccommodationAndRoom);
router.route("/room_detail").post(customersController.getRoomDetailById);
router
  .route("/order_new")
  .post(isAuthenticatedUser, customersController.customerCreateOrder);
router
  .route("/confirm_order")
  .post(isAuthenticatedUser, customersController.customerConfirmOrder);
module.exports = router;
