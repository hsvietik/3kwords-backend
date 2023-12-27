const Joi = require("joi");
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
  subscription: Joi.string().valid("starter", "pro", "business"),
});
