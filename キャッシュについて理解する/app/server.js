const express = require("express");
const app = express();
const path = require("path");

app.get("/cache_image", (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.sendFile(path.join(__dirname, "public/image.png"));
});

app.get("/no_cache_image", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(path.join(__dirname, "public/image2.png"));
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
