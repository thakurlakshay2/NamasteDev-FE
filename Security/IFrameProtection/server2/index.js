const express = require("express");
//create app
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self");

  res.cookie("sessionID", "12345", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  next();
});

app.get("/iFrame-website1", (req, res) => {
  res.sendFile(__dirname + "/public/iFrame-website1.html");
});
app.get("/iFrame-website2", (req, res) => {
  res.sendFile(__dirname + "/public/iFrame-website2.html");
});

//start app
const PORT = 3011;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
