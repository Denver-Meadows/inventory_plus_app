const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const inventory = require("../models/inventory");

// Create Item
router.route("/create-item").post((req, res, next) => {
  inventory.create(req.body, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Read items
router.get("/", (req, res) => {
  inventory.find((error, data) => {
    if (error) next(error);
    else {
      res.json(data);
    }
  });
});

// Get Single item
router.route("/edit-inventory/:id").get((req, res) => {
  inventory.findById(req.params.id, (error, data) => {
    if (error) return next(error);
    else {
      res.json(data);
    }
  });
});

// Update item
router.route("/update-item/:id").put((req, res, next) => {
  inventory.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log("Item updated successfully");
        res.json(data);
      }
    }
  );
});

// Delete Item
router.route("/delete-item/:id").delete((req, res, next) => {
  inventory.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error);
    else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
