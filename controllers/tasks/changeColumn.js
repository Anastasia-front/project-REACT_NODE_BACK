const { Task, Column } = require("../../models")
const { Types } = require('mongoose')
const { taskSchemas } = require("../../schemas");
const { HttpError, BadRequestError } = require('../../helpers')

const changeColumn = async (req, res) => {
    const { value, error } = taskSchemas.changeColumnSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { id } = req.params;
    const taskId = new Types.ObjectId(id);
    const task = await Task.findByIdAndUpdate(id, value);
    if (!task) {
        throw HttpError(404, `Task ${id} not found`);
    }

    await Column.findByIdAndUpdate(
        task.column,
        {
            $pull: { taskOrder: { $in: taskId } }
        }
    )
    const { board } = await Column.findByIdAndUpdate(
        value.column,
        {
            $push: { taskOrder: taskId }
        }
    );
    res.json({
        board,
        message: `Task has been moved to column ${value.column}`
    });
};

module.exports = changeColumn;
