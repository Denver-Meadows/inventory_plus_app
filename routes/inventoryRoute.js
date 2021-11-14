const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const inventory = require("../models/inventory");

// //////// NEED TO SETUP AND CONNECT TO INVENTORY DB
router.get("/", (req, res) => {
  inventory.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

module.exports = router;
