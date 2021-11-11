const Customer = require("../models/customer");

// Creating a method that can be called in Index.js, under the routes.  Eventually Routes will be moved.
// Having trouble getting this data to the route to be passed to front end.
module.exports.allCustomers = async (req, res) => {
  const customers = await Customer.find({});
  console.log(customers);
  // return customers;
};

/*
used for testing - no longer needed
const testCustomer = new Customer({
  name: "Denver Meadows",
  email: "dm@yahoo.com",
  phone: "513 - 555 - 5555",
  zip: "44444",
  country: "USA",
});

module.exports = testCustomer;
*/

/*
Used for adding customers
const Customer = require("./models/customer");
Customer.insertMany([
  {
    name: "John Smith",
    email: "jsmith@yahoo.com",
    phone: "513-555-7485",
    city: "Cincinnati",
    state: "OH",
  },
  {
    name: "Denver Bryant",
    email: "dbryant@yahoo.com",
    phone: "614-555-7485",
    city: "Austin",
    state: "TX",
  },
  {
    name: "Clark West",
    email: "cwest@yahoo.com",
    phone: "201-555-7485",
    city: "New York",
    state: "NY",
  },
  {
    name: "Dalton Hassel",
    email: "dhassel@yahoo.com",
    phone: "602-555-7485",
    city: "San Francisco",
    state: "CA",
  },
  {
    name: "Mike Long",
    email: "mlong@yahoo.com",
    phone: "857-555-7425",
    city: "Tulsa",
    state: "OK",
  },
  {
    name: "Tim Smith",
    email: "tsmith@yahoo.com",
    phone: "241-555-7412",
    city: "Orlando",
    state: "FL",
  },
  {
    name: "Mark Sample",
    email: "msample@yahoo.com",
    phone: "254-555-4584",
    city: "Detroit",
    state: "MI",
  },
]);
*/
