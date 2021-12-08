const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  qtyOnHand: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
