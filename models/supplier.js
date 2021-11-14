const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
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
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);

/*()
// Used for adding suppliers
const Supplier = require("../models/supplier");
Supplier.insertMany([
  {
    name: "Econoco",
    email: "customerservice@econco.com",
    phone: "1-800-555-2145",
    city: "Miami",
    state: "FL",
  },
  {
    name: "Amazon",
    email: "customerservice@amazon.com",
    phone: "1-800-555-4581",
    city: "San Francisco",
    state: "CA",
  },
  {
    name: "Displays by Jack",
    email: "customerservice@displays.com",
    phone: "1-800-555-8465",
    city: "Scranton",
    state: "PA",
  },
  {
    name: "Uline",
    email: "customerservice@uline.com",
    phone: "1-800-555-9351",
    city: "New York",
    state: "NY",
  },
  {
    name: "Grainger",
    email: "customerservice@grainger.com",
    phone: "1-800-555-8634",
    city: "Columbus",
    state: "OH",
  },
  {
    name: "Parts Plus",
    email: "customerservice@partsplus.com",
    phone: "1-800-555-8634",
    city: "Dallas",
    state: "TX",
  },
  {
    name: "In-Stock",
    email: "customerservice@instock.com",
    phone: "1-800-555-8641",
    city: "Phoenix",
    state: "AZ",
  },
]);
*/
