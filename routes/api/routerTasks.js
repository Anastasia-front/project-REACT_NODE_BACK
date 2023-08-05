const express = require("express");

const { ctrlTasks } = require("../../controllers");

const { isAuthorized, validateBody, isValidId } = require('../../middlewares');

const { taskSchemas } = require('../../schemas')

const routerTasks = express.Router();

routerTasks.post('/', isAuthorized, validateBody(taskSchemas.addTaskSchema), ctrlTasks.addTask);

routerTasks.put('/:id', isAuthorized, isValidId, validateBody(taskSchemas.updateTaskSchema), ctrlTasks.updateTask);

routerTasks.delete('/:id', isAuthorized, isValidId, ctrlTasks.deleteTask);

module.exports = routerTasks;
