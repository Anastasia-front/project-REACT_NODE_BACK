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

const editSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}$')),
  password: Joi.string(),
  theme: Joi.string().valid("light", "dark", "violet").insensitive(),
})

const authSchemas = { loginSchema, registerSchema, editSchema };

module.exports = authSchemas;
