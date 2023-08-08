const Joi = require("joi");

const { array } = require('../constants')

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().valid(...array.icons),
  background: Joi.string().valid(...array.backgrounds).allow(null),
});

const updateBoardSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string().valid(...array.icons),
  background: Joi.string().valid(...array.backgrounds).allow(null),
});

const boardSchemas = { addBoardSchema, updateBoardSchema };

module.exports = boardSchemas;
