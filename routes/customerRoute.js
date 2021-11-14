const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const customer = require("../models/customer");

// router.get("/customers", (req, res) => {
//   res.send("Customers");
// });

// I'm getting the data.  now i need to use Axios to get that data to the frontend.
router.get("/", (req, res) => {
  customer.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

module.exports = router;