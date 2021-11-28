const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const supplier = require("../models/supplier");

// Create Supplier
router.route("/create-supplier").post((req, res, next) => {
  supplier.create(req.body, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Read all suppliers
router.get("/", (req, res) => {
  supplier.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

// Get Single Supplier
router.route("/edit-supplier/:id").get((req, res) => {
  supplier.findById(req.params.id, (error, data) => {
    if (error) return next(error);
    else {
      console.log(data);
      res.json(data);
    }
  });
});

// Update Supplier
router.route("/update-supplier/:id").put((req, res, next) => {
  supplier.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log(data);
        console.log("Student updated successfully");
        res.json(data);
      }
    }
  );
});

// Delete Supplier
router.route("/delete-supplier/:id").delete((req, res, next) => {
  supplier.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error);
    else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
