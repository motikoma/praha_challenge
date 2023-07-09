const express = require("express");
const cors = require("cors");

const app = express();

// ngrokwを起動して生成したOriginを記載する
const allowedOrigin = "https://b212-124-210-123-8.ngrok-free.app";

const corsOptions = {
  origin: function (origin, callback) {
    if (origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "POST",
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
};

// Simple request: no preflight
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.json({ message: "Simple request: no preflight" });
});

// Non-simple request: preflight is needed
app.post("/", cors(corsOptions), (req, res) => {
  res.json({ message: "Non-simple request: preflight" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
