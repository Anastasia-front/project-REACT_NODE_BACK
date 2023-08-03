const { Column } = require("../../models")


const addColumn = async (req, res) => {
    const result = await Column.create({ ...req.body });
    res.status(201).json(result);
};

module.exports = addColumn;