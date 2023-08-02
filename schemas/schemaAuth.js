const Joi = require("joi");

const loginSchema = Joi.object({
  //
});

const registerSchema = Joi.object({
  //
});
const authSchemas = { loginSchema, registerSchema };

module.exports = authSchemas;
