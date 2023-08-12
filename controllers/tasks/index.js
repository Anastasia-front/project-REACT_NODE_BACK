const addTask = require('./addTask');
const deleteTask = require('./deleteTask');
const updateTask = require('./updateTask');
const transferTask = require('./transferTask');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    addTask: ctrlWrapper(addTask),
    updateTask: ctrlWrapper(updateTask),
    deleteTask: ctrlWrapper(deleteTask),
    transferTask: ctrlWrapper(transferTask),
}

