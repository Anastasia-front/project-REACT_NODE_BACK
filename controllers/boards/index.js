const getAllBoards = require('./getAllBoards');
const addBoard = require('./addBoard');
const deleteBoard = require('./deleteBoard');
const updateBoard = require('./updateBoard');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    getAllBoards: ctrlWrapper(getAllBoards),
    addBoard: ctrlWrapper(addBoard),
    updateBoard: ctrlWrapper(updateBoard),
    deleteBoard: ctrlWrapper(deleteBoard),
}
