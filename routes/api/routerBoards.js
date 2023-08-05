const express = require("express");

const { ctrlBoards } = require("../../controllers");

const { validateBody, isValidId } = require('../../middlewares');

const { boardSchemas } = require('../../schemas')

const routerBoards = express.Router();

routerBoards.get('/', ctrlBoards.getBoards);

routerBoards.post('/', validateBody(boardSchemas.addBoardSchema), ctrlBoards.addBoard);

routerBoards.put('/:id', isValidId, validateBody(boardSchemas.updateBoardSchema), ctrlBoards.updateBoard);

routerBoards.delete('/:id', isValidId, ctrlBoards.deleteBoard);

module.exports = routerBoards;
