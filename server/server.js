const express = require("express");
const monk = require("monk");
const cors = require("cors");

const app = express();
const db = monk("localhost/oinker");
const oinks = db.get("oinks");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Oinker! 🐽" });
});

app.get("/oinks", (req, res) => {
  oinks.find().then(oinks => {
    res.json(oinks);
  });
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
