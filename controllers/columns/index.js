const addColumn = require('./addColumn');
const deleteColumn = require('./deleteColumn');
const updateColumn = require('./updateColumn');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    addColumn: ctrlWrapper(addColumn),
    updateColumn: ctrlWrapper(updateColumn),
    deleteColumn: ctrlWrapper(deleteColumn),
}

