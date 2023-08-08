const express = require("express");

const { ctrlTasks } = require("../../controllers");

const { isAuthorized, isValidId } = require('../../middlewares');

const routerTasks = express.Router();

routerTasks.post('/', isAuthorized,  ctrlTasks.addTask);

routerTasks.put('/:id', isAuthorized, isValidId,  ctrlTasks.updateTask);

routerTasks.delete('/:id', isAuthorized, isValidId, ctrlTasks.deleteTask);

module.exports = routerTasks;
