const express = require("express");
const app = express();

app.use(express.static("./dist/giphy"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/giphy" });
});

const port = process.env.PORT || 8080;

app.listen(port);
