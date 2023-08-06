const Joi = require("joi");

const { regExp, message } = require("../constants");

const helpSchema = Joi.object({
  email: Joi.string()
    .pattern(regExp.email)
    .required()
    .messages({
      "any.required": message.fieldRequired("email"),
      "string.pattern.base": message.emailInvalid,
    }),
  comment: Joi.string()
    .min(10)
    .max(256)
    .required()
    .messages({
      "any.required": message.fieldRequired("comment"),
      "string.min": `Comment should have a minimum length of {#limit} symbols`,
      "string.max": `Comment should have a maximum length of {#limit} symbols`,
    }),
});

module.exports = helpSchema;
