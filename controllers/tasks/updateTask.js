const { Task, Column } = require("../../models")
const { taskSchemas } = require("../../schemas");
const { HttpError, BadRequestError } = require('../../helpers')

const updateTask = async (req, res) => {
    const { value, error } = taskSchemas.updateTaskSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, value, { new: true });
    if (!result) {
        throw HttpError(404, `Task ${id} not found`);
    }
    const { board } = await Column.findById(result.column);
    res.json({ ...result._doc, board });
};

module.exports = updateTask;
