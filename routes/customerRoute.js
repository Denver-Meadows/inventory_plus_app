const express = require("express");
router = express.Router();

customersRoute = require("../controllers/customersController");

router.get("/customers", customersRoute.customersContorller);

module.exports = router;
