const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth");
const wordsRouter = require("./routes/words");

const app = express(); // web server

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
app.use("/api/words", wordsRouter);

// request to non-existent address
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// error handling
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
module.exports = app;
