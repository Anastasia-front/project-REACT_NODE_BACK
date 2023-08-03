const getAllData = require('./getAllData');
const addColumn = require('./addColumn');
const deleteColumn = require('./deleteColumn');
const editColumn = require('./editColumn');
const { ctrlWrapper } = require('../../decorators')

module.exports = {
    getAllData: ctrlWrapper(getAllData),
    addColumn: ctrlWrapper(addColumn),
    editColumn: ctrlWrapper(editColumn),
    deleteColumn: ctrlWrapper(deleteColumn),
}

