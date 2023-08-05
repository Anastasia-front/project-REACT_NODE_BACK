const addTask = require('./addTask');
const deleteTask = require('./deleteTask');
const updateTask = require('./updateTask');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    addTask: ctrlWrapper(addTask),
    updateTask: ctrlWrapper(updateTask),
    deleteTask: ctrlWrapper(deleteTask),
}

