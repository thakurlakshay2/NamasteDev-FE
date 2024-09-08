const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { emit } = require("node:process");
const { Server } = require("socket.io");

const app = express();

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/index.html"));
});

io.on("connection", (socket) => {
  console.log("connection established");

  //listening to message
  //Here chat_message and disconnect are events
  socket.on("chat_message", (msg) => {
    console.log("received msg: " + msg);
    io.emit("chat_message", msg); //broadcasting  message
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(3012, () => {
  console.log("connection to 3012");
});
