const express = require("express");
const app = express();
const port = 4000;

app.get("/image.png", (req, res) => {
  res.cookie("thirdPartyCokkie", "fuga", {
    httpOnly: true,
    domain: "9810-124-210-123-8.ngrok-free.app",
    sameSite: "None",
    secure: true,
  }); // サードパーティクッキーを設定
  res.sendFile(__dirname + "/public/image.png");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
