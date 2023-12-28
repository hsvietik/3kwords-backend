const express = require("express");
// const registerSchema = require("../models/user.js");
const authRouter = express.Router();
const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": `name should be a type of text`,
    "any.required": `missing required name field`,
  }),
  email: Joi.string().pattern(emailRegexp, "email").required().messages({
    "any.required": "Email is required",
  }),
  password: Joi.string().min(4).required().messages({
    "any.required": "Set password for user",
  }),
  level: Joi.string().valid("A1", "A2", "B1", "B2"),
});

authRouter.get("/", (req, res) => {});
authRouter.get("/:id", (req, res) => {});
authRouter.post("/", async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    const result = error;
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
