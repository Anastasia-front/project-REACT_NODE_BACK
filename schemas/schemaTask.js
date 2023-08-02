const Joi = require("joi");

const addTaskSchema = Joi.object({
  //
});

const editTaskSchema = Joi.object({
  //
});

const taskSchemas = { addTaskSchema, editTaskSchema };

module.exports = taskSchemas;
