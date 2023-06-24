const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ text: "hello world" });
});

app.post("/", (req, res) => {
  if (req.headers["content-type"] !== "application/json") {
    res.status(400).json({ text: "content-type error" });
  } else {
    res.status(201).json(req.body);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
