const express = require("express");
const app = express();

app.use(express.static("./dist/giphy"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/giphy" });
});

app.listen(8080);
