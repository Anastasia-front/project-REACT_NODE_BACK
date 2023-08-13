const express = require("express");

const { ctrlTasks } = require("../../controllers");

const { isAuthorized, isValidId } = require('../../middlewares');

const routerTasks = express.Router();

routerTasks.post('/', isAuthorized, ctrlTasks.addTask);

routerTasks.put('/:id', isAuthorized, isValidId, ctrlTasks.updateTask);

routerTasks.delete('/:id', isAuthorized, isValidId, ctrlTasks.deleteTask);

routerTasks.patch('/:id/transfer', isAuthorized, isValidId, ctrlTasks.transferTask);

routerTasks.patch('/:id/tocolumn', isAuthorized, isValidId, ctrlTasks.changeColumn);

module.exports = routerTasks;
