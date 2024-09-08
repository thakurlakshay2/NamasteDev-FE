const express = require("express");

const { join } = require("node:path");

const app = express();

//Data is goin to be long and will we sent in event stream
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write("data: Welcome to server sent event \n\n");

  //DUMMY DYNAMIC LOGICS

  const intervalId = setInterval(() => {
    res.write(`data: Server Time ${new Date().toLocaleDateString()} \n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
  //Adding DB logic for you
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/index.html"));
});

app.listen(3012, () => {
  console.log("connection to 3012");
});
