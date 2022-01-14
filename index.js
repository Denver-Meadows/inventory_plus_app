const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

const path = require("path");

// Routes
const customerRoute = require("./routes/customerRoute");
const inventoryRoute = require("./routes/inventoryRoute");
const supplierRoute = require("./routes/supplierRoute");

// connect to mongo with mongoose
const dbURL =
  process.env.DB_URL || "mongodb://localhost:27017/inventory_plus_app";
mongoose
  .connect(dbURL, {
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

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/customers", customerRoute);
app.use("/inventory", inventoryRoute);
app.use("/suppliers", supplierRoute);

app.us(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get("*", (req, res) => {
  res.send("Sorry Page Doesn't Exist");
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
