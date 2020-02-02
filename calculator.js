const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send("The result is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  const BMI = weight / (height * height);
  res.send("The BMI is " + BMI);
});

app.listen(3000, function() {
  "Server listening on port 3000.";
});
