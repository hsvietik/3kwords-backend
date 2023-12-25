const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth");
const wordsRouter = require("./routes/words");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   next();
// });
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
}); // request to non-existent address
app.use("/api/users", authRouter);
app.use("/api/words", wordsRouter);
