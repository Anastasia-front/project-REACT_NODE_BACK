const { Column, Board } = require("../../models")
const { columnSchemas } = require("../../schemas");
const { BadRequestError } = require("../../helpers");


const addColumn = async (req, res) => {
    const { value, error } = columnSchemas.addColumnSchema.validate(req.body, {
        abortEarly: false,
    });
    BadRequestError(error);
    const { board } = value;
    const result = await Column.create({ ...value });
    await Board.findByIdAndUpdate(board, { $push: { columnOrder: result._id } });
    res.status(201).json(result);
};

module.exports = addColumn;