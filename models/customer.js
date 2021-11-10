const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  postalZip: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
