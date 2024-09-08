const client = require("./client");

const { path } = require("path");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) res.send(data.customers);
    else throw new Error();
  });
});
app.post("/create", (req, res) => {});
app.post("/update", (req, res) => {});
app.post("/remove", (req, res) => {});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.listen(3000, () => {
  console.log("listening at 3000");
});
