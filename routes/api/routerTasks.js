const express = require("express");

const { ctrlTasks } = require("../../controllers");

const { validateBody, isValidId } = require('../../middlewares');

const { taskSchemas } = require('../../schemas')

const routerTasks = express.Router();

routerTasks.post('/', validateBody(taskSchemas.addTaskSchema), ctrlTasks.addTask);

routerTasks.put('/:id', isValidId, validateBody(taskSchemas.editTaskSchema), ctrlTasks.editTask);

routerTasks.delete('/:id', isValidId, ctrlTasks.deleteTask);

module.exports = routerTasks;
