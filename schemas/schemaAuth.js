const Joi = require("joi");

const { regExp, array, message } = require("../constants");
const { themes } = array;

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(regExp.email)
    .required()
    .messages({
      "any.required": `${message.fieldRequired("email")}`,
      "string.pattern.base": `${message.emailInvalid}`,
    }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .required()
    .messages({
      "any.required": `${message.fieldRequired("password")}`,
      "string.pattern.base": `${message.passwordInvalid}`,
    }),
});

const registerSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(32)
    .pattern(regExp.name)
    .required()
    .messages({
      "any.required": `${message.fieldRequired("name")}`,
      "string.pattern.base": `${message.nameInvalid}`,
    }),
  email: Joi.string()
    .pattern(regExp.email)
    .required()
    .messages({
      "any.required": `${message.fieldRequired("email")}`,
      "string.pattern.base": `${message.emailInvalid}`,
    }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .required()
    .messages({
      "any.required": `${message.fieldRequired("password")}`,
      "string.pattern.base": `${message.passwordInvalid}`,
    }),
});

const updateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(32)
    .pattern(regExp.name)
    .messages({
      "string.pattern.base": `${message.nameInvalid}`,
    }),
  email: Joi.string()
    .pattern(regExp.email)
    .messages({
      "string.pattern.base": `${message.emailInvalid}`,
    }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .messages({
      "string.pattern.base": `${message.passwordInvalid}`,
    }),
  avatarURL: Joi.string(),
});

const updateTheme = Joi.object({
  theme: Joi.string()
    .valid(...themes)
    .insensitive()
    .required()
    .messages({
      "any.required": `${message.fieldRequired("theme")}`,
      "any.only": `Theme field must be one of the next value - ${themes.join(
        ", "
      )}`,
    }),
});

const authSchemas = { loginSchema, registerSchema, updateSchema, updateTheme };

module.exports = authSchemas;
