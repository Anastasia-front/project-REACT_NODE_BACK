const { Task, Column } = require("../../models")
const { HttpError } = require('../../helpers')

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const result = await Task.findByIdAndRemove(id);
    if (!result) {
        throw HttpError(404, `Task ${id} not found`);
    }
    const { board } = await Column.findByIdAndUpdate(result.column, {
        $pull: { taskOrder: result._id },
    });
    result.board = board;
    res.status(200).json({
        message: `Task ${id} deleted successfully`,
        data: result,
    });
};


module.exports = deleteTask;