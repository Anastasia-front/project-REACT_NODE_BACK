const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const addColumnSchema = Joi.object({
  title: Joi.string().required(),
  board: Joi.objectId().required(),
  });

const editColumnSchema = Joi.object({
  title: Joi.string().required(),
});

const columnSchemas = { addColumnSchema, editColumnSchema };

module.exports = columnSchemas;
