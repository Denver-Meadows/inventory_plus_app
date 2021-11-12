const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 3001;
const app = express();

// Import customerRoute
const customerRoute = require("./routes/customerRoute");
const inventoryRoute = require("./routes/inventoryRoute");
const supplierRoute = require("./routes/supplierRoute");

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

app.use("/customers", customerRoute);
app.use("/inventory", inventoryRoute);
app.use("/suppliers", supplierRoute);

app.get("*", (req, res) => {
  res.send("i don't know that path");
});

//

//

app.listen(port, () => {
  console.log("Serving on port 3001");
});
