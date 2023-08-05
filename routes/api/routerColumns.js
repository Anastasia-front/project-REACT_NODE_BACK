const express = require("express");

const { ctrlColumns } = require("../../controllers");

const { isAuthorized, validateBody, isValidId } = require('../../middlewares');

const { columnSchemas } = require('../../schemas')

const routerColumns = express.Router();

routerColumns.post('/', isAuthorized, validateBody(columnSchemas.addColumnSchema), ctrlColumns.addColumn);

routerColumns.put('/:id', isAuthorized, isValidId, validateBody(columnSchemas.updateColumnSchema), ctrlColumns.updateColumn);

routerColumns.delete('/:id', isAuthorized, isValidId, ctrlColumns.deleteColumn);


module.exports = routerColumns;




