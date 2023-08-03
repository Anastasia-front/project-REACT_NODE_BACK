const express = require("express");

const { ctrlBoards } = require("../../controllers");

const { validateBody, isValidId } = require('../../middlewares');

const {schemaBoard} = require('../../schemas')

const routerBoards = express.Router();

routerBoards.get('/', ctrlBoards.getBoards);

routerBoards.post('/', validateBody(schemaBoard.addBoardSchema), ctrlBoards.addBoard);

routerBoards.put('/:id', isValidId, validateBody(schemaBoard.addBoardSchema), ctrlBoards.editBoard);

routerBoards.delete('/:id', isValidId, schemaBoard.deleteBoard);

module.exports = routerBoards;
