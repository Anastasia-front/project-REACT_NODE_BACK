const express = require("express");

const { ctrlBoards } = require("../../controllers");

const { isValidId, isAuthorized } = require('../../middlewares');

const routerBoards = express.Router();

routerBoards.get('/', isAuthorized, ctrlBoards.getAllBoards);

routerBoards.get('/:id', isAuthorized, isValidId, ctrlBoards.getCompleteBoard);

routerBoards.post('/', isAuthorized, ctrlBoards.addBoard);

routerBoards.put('/:id', isAuthorized, isValidId, ctrlBoards.updateBoard);

routerBoards.delete('/:id', isAuthorized, isValidId, ctrlBoards.deleteBoard);

routerBoards.patch('/:id/add-user', isAuthorized, isValidId, ctrlBoards.addUser);

routerBoards.patch('/:id/remove-user', isAuthorized, isValidId, ctrlBoards.removeUser);

module.exports = routerBoards;
