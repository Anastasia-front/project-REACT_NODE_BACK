const Joi = require("joi");

const { regExp } = require("../constants");

const helpSchema = Joi.object({
  email: Joi.string().pattern(regExp.email).required().messages({
    "any.required": "Missing required email field",
    "string.pattern.base":
      "Invalid email field. It must contain only Latin letters and meet all requirements for mail; may include numbers, letters in different case.",
  }),
  comment: Joi.string().min(10).max(256).required().messages({
    "any.required": "Missing required comment field",
    "string.min": `Comment should have a minimum length of {#limit}`,
    "string.max": `Comment should have a maximum length of {#limit}`,
  }),
});

module.exports = helpSchema;
