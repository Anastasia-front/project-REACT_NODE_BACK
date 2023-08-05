const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const addColumnSchema = Joi.object({
  title: Joi.string().required(),
  board: Joi.objectId().required(),
});

const updateColumnSchema = Joi.object({
  title: Joi.string(),
});

const columnSchemas = { addColumnSchema, updateColumnSchema };

module.exports = columnSchemas;
