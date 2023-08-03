const addTask = require('./addTask');
const deleteTask = require('./deleteTask');
const editTask = require('./editTask');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    addTask: ctrlWrapper(addTask),
    editTask: ctrlWrapper(editTask),
    deleteTask: ctrlWrapper(deleteTask),
}

