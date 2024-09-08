const express = require("express");
const app = express();

let data = "Initial Data";

//creating a waitlist to store longpollnig request
const waitListClients = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//How to hold request for long polling???
//until we send res.json or something back resquest is on hold in the server. automatically
app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({
      data,
    });
  } else {
    waitListClients.push(res);
  }
});

app.get("/updateData", (req, res) => {
  data = req.query.data;

  while (waitListClients.length > 0) {
    const client = waitListClients.pop();
    client.json({
      data,
    });
  }

  res.sendStatus({ success: "data updated successfully" });
});

const port = 5011;
app.listen(port, () => {
  console.log("Server running at port " + port);
});
