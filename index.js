const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 3001;
const app = express();

// Import customerRoute
const customerRoute = require("./routes/customerRoute");

const customers = require("./testData");

// Trying to get the data from the controller to this route.
// const testCustomers = require("./controllers/customers");
// const newDic = testCustomers.allCustomers();
// console.log(newDic);

app.use(cors());

// connect to mongo with mongoose
mongoose
  .connect("mongodb://localhost:27017/inventory_plus_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open with Mongoose to Mongo");
  })
  .catch((err) => {
    console.log("Mongoose Error");
    console.log(err);
  });

// app.use runs everytime we get an incoming response
// app.use((req, res) => {
//   res.send("Get that server working");
// });

// Using the customerRoute for '/customers'

// ROUTES - will need to move to separate file soon.
app.get("/", (req, res) => {
  console.log("home page");
  res.send("home page");
});

app.use("/", customerRoute);
// passed in our customers data above and here we are sending that data in json format.
// with the proxy setup in frontend package.json, we can now access this json information in the frontend
// app.get("/customers", (req, res) => {
//   res.json(customers);
// });

app.get("/cats", (req, res) => {
  res.send("MEOW");
});

app.get("/r/:anything", (req, res) => {
  const { anything } = req.params;
  res.send(`<h1>browsing ${anything}</h1>`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("hello");
});

app.get("*", (req, res) => {
  res.send("i don't know that path");
});

//

//

app.listen(port, () => {
  console.log("Serving on port 3001");
});
