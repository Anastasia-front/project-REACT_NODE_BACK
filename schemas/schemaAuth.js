const Joi = require("joi");

const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const passwordRegexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]+$/;
const nameRegexp = /^[a-zA-Z0-9]+$/;

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
    "string.pattern.base": "Invalid email field",
  }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(passwordRegexp)
    .required()
    .messages({
      "any.required": "Missing required password field",
      "string.pattern.base": "Invalid password field",
    }),
});

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(32).pattern(nameRegexp).required().messages({
    "any.required": "Missing required name field",
    "string.pattern.base":
      "Invalid name field. It must contain only Latin letters; may contain numbers, signs, letters in different case.",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
    "string.pattern.base":
      "Invalid email field. It must contain only Latin letters; may include numbers, letters in different case.",
  }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(passwordRegexp)
    .required()
    .messages({
      "any.required": "Missing required password field",
      "string.pattern.base":
        "Invalid password field. It must contain only Latin letters, at least one uppercase, lowercase letter and a number; does not contain a space.",
    }),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2).max(32).pattern(nameRegexp).messages({
    "string.pattern.base":
      "Invalid name field. It must contain only Latin letters; may contain numbers, signs, letters in different case.",
  }),
  email: Joi.string().pattern(emailRegexp).messages({
    "string.pattern.base":
      "Invalid email field. It must contain only Latin letters; may include numbers, letters in different case.",
  }),
  password: Joi.string().min(8).max(64).pattern(passwordRegexp).messages({
    "string.pattern.base":
      "Invalid password field. It must contain only Latin letters, at least one uppercase, lowercase letter and a number; does not contain a space.",
  }),
  avatarURL: Joi.string(),
});

const updateTheme = Joi.object({
  theme: Joi.string()
    .valid("light", "dark", "violet")
    .insensitive()
    .required()
    .messages({
      "any.required": "Missing required theme field",
      "any.only":
        "Theme field must be one of the next value - light, dark or violet",
    }),
});

const authSchemas = { loginSchema, registerSchema, updateSchema, updateTheme };

module.exports = authSchemas;
