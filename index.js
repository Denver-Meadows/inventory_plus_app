const express = require("express");
const app = express();

// app.use runs everytime we get an incoming response
app.use((req, res) => {
  res.send("Get that server working");
});

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/cats", (req, res) => {
  res.send("MEOW");
});

app.get("*", (req, res) => {
  res.send("i don't know that path");
});

//

//

app.listen(3001, () => {
  console.log("Serving on port 3001");
});
