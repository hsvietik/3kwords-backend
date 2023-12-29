const express = require("express");
const registerSchema = require("../models/user.js");
const router = express.Router();
const controllers = require("../controllers/auth.js");
const { validateBody } = require("../middlewares/");
const schemas = require("../schemas/users.js");

router.post("/", validateBody(schemas.registerSchema), controllers.register);
router.get("/:id", (req, res) => {});
router.put(
  "/:id",
  validateBody(schemas.registerSchema),
  controllers.updateUser
);

module.exports = router;
