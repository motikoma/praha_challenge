const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.cookie("firstPartyCookie", "hoge", {
    httpOnly: true,
  }); // ファーストパーティクッキーを設定
  res.sendFile(__dirname + "/public/index.html"); // index.htmlを提供
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
