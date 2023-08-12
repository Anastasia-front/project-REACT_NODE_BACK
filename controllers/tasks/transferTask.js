const { Task, Column } = require("../../models")
const { transferSchema } = require("../../schemas");
const { BadRequestError } = require("../../helpers");
const { Types } = require('mongoose')

const transferTask = async (req, res) => {
    const { value, error } = transferSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { id } = req.params;
    const { source, destination } = value;
    const taskId = new Types.ObjectId(id);
    const columnId = new Types.ObjectId(destination.droppableId);
    await Column.findByIdAndUpdate(
        source.droppableId,
        {
            $pull: { taskOrder: { $in: taskId } }
        }
    )
    await Column.findByIdAndUpdate(
        destination.droppableId,
        {
            $push: { taskOrder: { $each: [taskId], $position: destination.index } }
        }
    );
    await Task.findByIdAndUpdate(id, { column: columnId })
    res.json({ message: `Task position has been changed to ${destination.index} in column ${destination.droppableId}` });
};

module.exports = transferTask;
