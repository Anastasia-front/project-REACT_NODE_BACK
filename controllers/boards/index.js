const getBoards = require('./getBoards');
const addBoard = require('./addBoard');
const deleteBoard = require('./deleteBoard');
const editBoard = require('./editBoard');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    getBoards: ctrlWrapper(getBoards),
    addBoard: ctrlWrapper(addBoard),
    editBoard: ctrlWrapper(editBoard),
    deleteBoard: ctrlWrapper(deleteBoard),
}
