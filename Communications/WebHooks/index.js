const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const payload = req.body;
  console.log("Received webhook payload: " + payload);
  res.status(200).send("Webhook received");
});
const port = 5011;
app.listen(port, () => {
  console.log("Server running at port " + port);
});
