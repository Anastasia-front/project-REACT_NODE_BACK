const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const { array, regExp } = require('../constants')

const addTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string().valid(...array.priorities),
  deadline: Joi.string().pattern(regExp.deadline).allow(null),
  column: Joi.objectId().required(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  priority: Joi.string().valid(...array.priorities),
  deadline: Joi.string().pattern(regExp.deadline).allow(null),
});

const changeColumnSchema = Joi.object({
  column: Joi.objectId().required(),
});

const taskSchemas = { addTaskSchema, updateTaskSchema, changeColumnSchema };

module.exports = taskSchemas;
