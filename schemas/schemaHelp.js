const Joi = require("joi");

const helpSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
  }),
  comment: Joi.string().min(10).max(256).required().messages({
    "string.empty": "Comment is required",
    "string.min": `Comment should have a minimum length of {#limit}`,
    "string.max": `Comment should have a maximum length of {#limit}`,
  }),
});

module.exports = helpSchema;
