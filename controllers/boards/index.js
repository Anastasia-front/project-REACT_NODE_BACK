const getAllBoards = require('./getAllBoards');
const getCompleteBoard = require('./getCompleteBoard');
const addBoard = require('./addBoard');
const deleteBoard = require('./deleteBoard');
const updateBoard = require('./updateBoard');
const addUser = require('./addUser');
const removeUser = require('./removeUser');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    getAllBoards: ctrlWrapper(getAllBoards),
    getCompleteBoard: ctrlWrapper(getCompleteBoard),
    addBoard: ctrlWrapper(addBoard),
    updateBoard: ctrlWrapper(updateBoard),
    deleteBoard: ctrlWrapper(deleteBoard),
    addUser: ctrlWrapper(addUser),
    removeUser: ctrlWrapper(removeUser),
}
