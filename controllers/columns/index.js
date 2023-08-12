const addColumn = require('./addColumn');
const deleteColumn = require('./deleteColumn');
const updateColumn = require('./updateColumn');
const transferColumn = require('./transferColumn');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    addColumn: ctrlWrapper(addColumn),
    updateColumn: ctrlWrapper(updateColumn),
    deleteColumn: ctrlWrapper(deleteColumn),
    transferColumn: ctrlWrapper(transferColumn),
}

