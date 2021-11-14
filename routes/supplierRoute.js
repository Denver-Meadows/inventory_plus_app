const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const supplier = require("../models/supplier");

// ///// NEED TO SETUP AND CONNECT TO SUPPLIER DB
router.get("/", (req, res) => {
  supplier.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

module.exports = router;
