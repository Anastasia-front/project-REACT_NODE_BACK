const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const { array } = require('../constants')

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().valid(...array.icons),
  background: Joi.objectId().allow(null),
});

const updateBoardSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string().valid(...array.icons),
  background: Joi.objectId().allow(null),
});

const boardSchemas = { addBoardSchema, updateBoardSchema };

module.exports = boardSchemas;
