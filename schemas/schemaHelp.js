const Joi = require("joi");

const helpSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": `Email is required`,
  }),
  comment: Joi.string().max(256).required().messages({
    "string.empty": `Comment is required`,
    "string.max": `Comment should have a maximum length of {#limit}`,
  }),
});

module.exports = helpSchema;
