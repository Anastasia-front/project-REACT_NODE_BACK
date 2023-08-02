const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().pattern(new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}$')).required(),
  password: Joi.string().required(),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}$')).required(),
  password: Joi.string().required(),
});
const authSchemas = { loginSchema, registerSchema };

module.exports = authSchemas;
