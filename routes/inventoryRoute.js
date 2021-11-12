const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const customer = require("../models/customer");

// //////// NEED TO SETUP AND CONNECT TO INVENTORY DB
router.get("/", (req, res) => {
  customer.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

module.exports = router;
