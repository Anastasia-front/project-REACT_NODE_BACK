const express = require("express");

const { ctrlColumns } = require("../../controllers");

const { validateBody, isValidId } = require('../../middlewares');

const { columnSchemas } = require('../../schemas')

const routerColumns = express.Router();


routerColumns.get('/', ctrlColumns.getAllData);

routerColumns.post('/', validateBody(columnSchemas.addColumnSchema), ctrlColumns.addColumn);

routerColumns.put('/:id', isValidId, validateBody(columnSchemas.editColumnSchema), ctrlColumns.editColumn);

routerColumns.delete('/:id', isValidId, ctrlColumns.deleteColumn);


module.exports = routerColumns;




