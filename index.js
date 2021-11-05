import express from "express";
const app = express();

// app.use runs everytime we get an incoming response
app.use((req, res) => {
  res.send("Get that server working");
});

app.listen(3001, () => {
  console.log("Serving on port 3001");
});
