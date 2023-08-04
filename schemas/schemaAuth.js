const Joi = require("joi");

const { regExp, array } = require("../constants");
const { themes } = array;

const loginSchema = Joi.object({
  email: Joi.string().pattern(regExp.email).required().messages({
    "any.required": "Missing required email field",
    "string.pattern.base": "Invalid email field",
  }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .required()
    .messages({
      "any.required": "Missing required password field",
      "string.pattern.base": "Invalid password field",
    }),
});

const registerSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(32)
    .pattern(regExp.onlyLatin)
    .required()
    .messages({
      "any.required": "Missing required name field",
      "string.pattern.base":
        "Invalid name field. It must contain only Latin letters; may contain numbers, signs, letters in different case.",
    }),
  email: Joi.string().pattern(regExp.email).required().messages({
    "any.required": "Missing required email field",
    "string.pattern.base":
      "Invalid email field. It must contain only Latin letters and meet all requirements for mail; may include numbers, letters in different case.",
  }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .required()
    .messages({
      "any.required": "Missing required password field",
      "string.pattern.base":
        "Invalid password field. It must contain only Latin letters, at least one uppercase, lowercase letter and a number; does not contain a space.",
    }),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2).max(32).pattern(regExp.onlyLatin).messages({
    "string.pattern.base":
      "Invalid name field. It must contain only Latin letters; may contain numbers, signs, letters in different case.",
  }),
  email: Joi.string().pattern(regExp.email).messages({
    "string.pattern.base":
      "Invalid email field. It must contain only Latin letters and meet all requirements for mail; may include numbers, letters in different case.",
  }),
  password: Joi.string().min(8).max(64).pattern(regExp.password).messages({
    "string.pattern.base":
      "Invalid password field. It must contain only Latin letters, at least one uppercase, lowercase letter and a number; does not contain a space.",
  }),
  avatarURL: Joi.string(),
});

const updateTheme = Joi.object({
  theme: Joi.string()
    .valid(...themes)
    .insensitive()
    .required()
    .messages({
      "any.required": "Missing required theme field",
      "any.only": `Theme field must be one of the next value - ${themes.join(
        ", "
      )}`,
    }),
});

const authSchemas = { loginSchema, registerSchema, updateSchema, updateTheme };

module.exports = authSchemas;
