const { Task } = require("../../models")
const { HttpError } = require('../../helpers')

const editTask = async (req, res) => {
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, `Task ${id} not found`);
    }
    res.json(result);
};

module.exports = editTask;