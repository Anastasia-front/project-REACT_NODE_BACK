const { Task, Column } = require("../../models")
const { taskSchemas } = require("../../schemas");
const { BadRequestError } = require("../../helpers");

const addTask = async (req, res) => {
    const { value, error } = taskSchemas.addTaskSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { column } = value;
    const result = await Task.create({ ...value });
    const { board } = await Column.findByIdAndUpdate(column, { $push: { taskOrder: result._id } });
    res.status(201).json({ ...result._doc, board });
};

module.exports = addTask;
