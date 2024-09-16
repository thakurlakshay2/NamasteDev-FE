const express = require("express");
//create app
const app = express();

app.use(express.static("public"));

app.get("/example1", (req, res) => {
  res.sendFile(__dirname + "/public/example1.html");
});
app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});

app.get("/example3", (req, res) => {
  res.sendFile(__dirname + "/public/example3.html");
});

//start app
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
