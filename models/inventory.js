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

/*()
// Used for adding inventory
const Inventory = require("./models/inventory");
Supplier.insertMany([
  {
    name: "Hansolle Bar Stool",
    sellPrice: 155,
    cost: 120,
    description: 'Black bar stool, 30" tall',
    category: "Chair",
    qtyOnHand: 12,
  },
  {
    name: "Fanbyn Bar Stool",
    sellPrice: 89,
    cost: 71,
    description: 'Bar stool with backrest, 25" tall',
    category: "Chair",
    qtyOnHand: 6,
  },
  {
    name: "Muren Recliner",
    sellPrice: 269,
    cost: 205,
    description: 'Recliner, Remmarn dark grey',
    category: "Chair",
    qtyOnHand: 2,
  },
  {
    name: "Strandmon Wing Chair",
    sellPrice: 329,
    cost: 285,
    description: 'Wing chair, Jarstad brown',
    category: "Chair",
    qtyOnHand: 1,
  },
  {
    name: "Stensele Bar Table",
    sellPrice: 139,
    cost: 98,
    description: 'Bar table, 27x27',
    category: "Table",
    qtyOnHand: 5,
  },
  {
    name: "Vedbo Dining Table",
    sellPrice: 479,
    cost: 415,
    description: 'Dining Table, black, 63x37',
    category: "Table",
    qtyOnHand: 7,
  },
  {
    name: "Mariedamm Table",
    sellPrice: 229,
    cost: 170,
    description: 'Small dining table, black marble effect, 41" tall',
    category: "Table",
    qtyOnHand: 2,
  },
  {
    name: "Malm Storage Bed",
    sellPrice: 499,
    cost: 399,
    description: 'Storage bed, white, full size',
    category: "Bed",
    qtyOnHand: 4,
  },
  {
    name: "Hemnes Day Bed",
    sellPrice: 299,
    cost: 199,
    description: 'Daybed frame with 3 drawers, gray, twin-size',
    category: "Bed",
    qtyOnHand: 7,
  },
  {
    name: "Brimnes Cabinet",
    sellPrice: 149,
    cost: 79,
    description: 'Glass-door cabinet, white, 31x74',
    category: "Cabinet",
    qtyOnHand: 2,
  },
  {
    name: "Liatorp Cabinet",
    sellPrice: 449,
    cost: 359,
    description: 'Glass-door cabinet, white, 37x84',
    category: "Cabinet",
    qtyOnHand: 3,
  },
  {
    name: "Billy Bookcase",
    sellPrice: 19,
    cost: 7,
    description: 'Bookcase, white, 15x41',
    category: "Bookcase",
    qtyOnHand: 10,
  },
  {
    name: "Hemnes Bookcase",
    sellPrice: 129,
    cost: 98,
    description: 'Bookcase, black-brown, 19x77',
    category: "Bookcase",
    qtyOnHand: 2,
  },
  {
    name: "Tarva Dresser",
    sellPrice: 179,
    cost: 119,
    description: '6-drawer chest, pine, 59x36',
    category: "Dresser",
    qtyOnHand: 2,
  },
  {
    name: "Koppang Dresser",
    sellPrice: 149,
    cost: 89,
    description: '5-drawer chest, white, 35x44',
    category: "Dresser",
    qtyOnHand: 4,
  },
  {
    name: "Malm Dresser",
    sellPrice: 129,
    cost: 69,
    description: '4-drawer chest, black-brown, 31x39',
    category: "Dresser",
    qtyOnHand: 7,
  },
]);
*/
