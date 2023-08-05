const express = require("express");

const { ctrlBoards } = require("../../controllers");

const { validateBody, isValidId, isAuthorized } = require('../../middlewares');

const { boardSchemas } = require('../../schemas')

const routerBoards = express.Router();

routerBoards.get('/', isAuthorized, ctrlBoards.getAllBoards);

routerBoards.get('/:id', isAuthorized, isValidId, ctrlBoards.getCompleteBoard);

routerBoards.post('/', isAuthorized, validateBody(boardSchemas.addBoardSchema), ctrlBoards.addBoard);

routerBoards.put('/:id', isAuthorized, isValidId, validateBody(boardSchemas.updateBoardSchema), ctrlBoards.updateBoard);

routerBoards.delete('/:id', isAuthorized, isValidId, ctrlBoards.deleteBoard);

module.exports = routerBoards;
