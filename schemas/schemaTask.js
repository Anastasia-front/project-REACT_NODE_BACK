const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const addTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string().valid('without', 'low', 'medium', 'high').messages({
    'any.only': "Only 'without', 'low', 'medium', 'high' values are allowed",
  }),
  deadline: Joi.string().regex(/^\d{8}$/).allow(null),
  column: Joi.objectId().required(),
});

const editTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string().valid('without', 'low', 'medium', 'high').messages({
    'any.only': "Only 'without', 'low', 'medium', 'high' values are allowed",
  }),
  deadline: Joi.string().regex(/^\d{8}$/).allow(null),
});

const taskSchemas = { addTaskSchema, editTaskSchema };

module.exports = taskSchemas;
