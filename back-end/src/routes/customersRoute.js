const customersController = require("../controllers/customersController");
const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");
router.route("/search").get(customersController.customerSearch);
router
  .route("/roomdetail/:id")
  .get(customersController.customerGetDetailAccommodation);
module.exports = router;
