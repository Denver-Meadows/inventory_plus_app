const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
