const { Column, Board } = require("../../models")


const addColumn = async (req, res) => {
    const { board } = req.body;
    const result = await Column.create({ ...req.body });
    await Board.findByIdAndUpdate(board, { $push: { columnOrder: result._id } });
    res.status(201).json(result);
};

module.exports = addColumn;