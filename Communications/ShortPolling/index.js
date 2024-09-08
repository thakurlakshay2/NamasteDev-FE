const express = require("express");
const app = express();

let data = "Initial Data";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.send({ data });
});

app.get("/update", (req, res) => {
  data = "Updated";

  res.send({
    data,
  });
});

const port = 5011;
app.listen(port, () => {
  console.log("Server running at port " + port);
});
