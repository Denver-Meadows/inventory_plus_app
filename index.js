const express = require("express");
const cors = require("cors");

const app = express();
const customers = require("./testData");

app.use(cors());

// app.use runs everytime we get an incoming response
// app.use((req, res) => {
//   res.send("Get that server working");
// });

app.get("/", (req, res) => {
  res.send("home page");
});

// passed in our customers data above and here we are sending that data in json format.
// with the proxy setup in frontend package.json, we can now access this json information in the frontend
app.get("/customers", (req, res) => {
  res.json(customers);
});

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

app.listen(3001, () => {
  console.log("Serving on port 3001");
});
