const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const customer = require("../models/customer");

// Create Customer
router.route("/create-customer").post((req, res, next) => {
  customer.create(req.body, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Read Customers
router.get("/", (req, res) => {
  customer.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

// Get Single Customer
router.route("/edit-customer/:id").get((req, res) => {
  customer.findById(req.params.id, (error, data) => {
    if (error) return next(error);
    else {
      res.json(data);
    }
  });
});

// Update Customer
router.route("/update-customer/:id").put((req, res, next) => {
  customer.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log("Customer updated successfully");
        res.json(data);
      }
    }
  );
});

// Delete Customer
router.route("/delete-customer/:id").delete((req, res, next) => {
  customer.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error);
    else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
