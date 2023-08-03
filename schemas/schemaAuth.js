const Joi = require("joi");

const emailRegexp = '[a-z0-9]+@[a-z]+.[a-z]{2,3}$';
const passwordRegexp = '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,64})';

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(new RegExp(emailRegexp))
    .required()
    .messages({
      'any.required': 'Missing required email field',
      'string.pattern.base': 'Invalid email field',
    }),
  password: Joi.string()
    .pattern(new RegExp(passwordRegexp))
    .required()
    .messages({
      'any.required': 'Missing required password field',
      'string.pattern.base': 'Invalid password field. Must contain upper and lower case letters and one number',
    }),
});

const registerSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'any.required': 'Missing required name field',
    }),
  email: Joi.string()
    .pattern(new RegExp(emailRegexp))
    .required()
    .messages({
      'any.required': 'Missing required email field',
      'string.pattern.base': 'Invalid email field',
    }),
  password: Joi.string()
    .pattern(new RegExp(passwordRegexp))
    .required()
    .messages({
      'any.required': 'Missing required password field',
      'string.pattern.base': 'Invalid password field. Must contain upper and lower case letters and one number',
    }),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .pattern(new RegExp(emailRegexp)).messages({
      'string.pattern.base': 'Invalid email field',
    }),
  password: Joi.string()
    .pattern(new RegExp(passwordRegexp))
    .messages({
      'string.pattern.base': 'Invalid password field. Must contain upper and lower case letters and one number',
    }),
  avatarURL: Joi.string(),
})

const updateTheme = Joi.object({
  theme: Joi.string()
    .valid("light", "dark", "violet")
    .insensitive()
    .required()
    .messages({
      'any.required': 'Missing required theme field',
      'any.only': 'Theme field must be one of [light, dark, violet]',
    }),
}) 

const authSchemas = { loginSchema, registerSchema, updateSchema, updateTheme };

module.exports = authSchemas;
