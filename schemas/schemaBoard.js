const Joi = require("joi");

const { regExp, array, message } = require("../constants");

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().valid(...array.icons),
  background: Joi.string()
    .valid(...array.backgrounds),
});

const updateBoardSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string().valid(...array.icons),
  background: Joi.string()
    .valid(...array.backgrounds),
});

const ownersSchema = Joi.object({
  email: Joi.string()
    .pattern(regExp.email)
    .required()
    .messages({
      "any.required": message.fieldRequired("email"),
      "string.pattern.base": message.emailInvalid,
    }),
});

const boardSchemas = { addBoardSchema, updateBoardSchema, ownersSchema };

module.exports = boardSchemas;
