const { Board } = require("../../models")
const { transferSchema } = require("../../schemas");
const { BadRequestError } = require("../../helpers");
const { Types } = require('mongoose')


const transferColumn = async (req, res) => {
    const { value, error } = transferSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { id } = req.params;
    const columnId = new Types.ObjectId(id);
    const { source, destination } = value;
    await Board.findByIdAndUpdate(
        source.droppableId,
        {
            $pull: { columnOrder: { $in: columnId } }
        }
    )
    await Board.findByIdAndUpdate(
        destination.droppableId,
        {
            $push: { columnOrder: { $each: [columnId], $position: destination.index } }
        }
    );
    res.json({ message: `Column position has been changed to ${destination.index} on board ${destination.droppableId}` });
};

module.exports = transferColumn;