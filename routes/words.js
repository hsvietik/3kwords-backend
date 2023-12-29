const express = require("express");
const { HttpError } = require("../helpers");

const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    if (!result) {
      throw HttpError(404);
    }
  } catch (error) {
    next(TypeError);
    // const { status = 500, message = "Server error" } = error;
    // res.status(status).json({ message });
  }
});
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {}
}); //update the word with users id
module.exports = router;
