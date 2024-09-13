const express = require("express");
//create app
const app = express();

//basically wsaying allow self , and from this url
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com"
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//start app
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
