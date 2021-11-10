const Customer = require("../models/customer");

const testCustomer = new Customer({
  name: "Denver",
  email: "dm@yahoo.com",
  phone: "513 - 555 - 5555",
  zip: "44444",
  country: "USA",
});

module.exports = testCustomer;
