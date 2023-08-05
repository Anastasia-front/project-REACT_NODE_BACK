const { Task, Column } = require("../../models")

const addTask = async (req, res) => {
    const { column } = req.body;
    const result = await Task.create({ ...req.body });
    await Column.findByIdAndUpdate(column, { $push: { taskOrder: result._id } });
    res.status(201).json(result);
};

module.exports = addTask;