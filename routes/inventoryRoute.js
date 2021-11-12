const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const customer = require("../models/customer");

router.get("/", (req, res) => {
  customer.find((error, data) => {
    console.log("inventory");
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

module.exports = router;
