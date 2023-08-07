const { Task } = require("../../models")
const { taskSchemas } = require("../../schemas");
const { HttpError, BadRequestError } = require('../../helpers')

const updateTask = async (req, res) => {
    const { value, error } = taskSchemas.addTaskSchema.validate(req.body, {
        abortEarly: false,
    });
    BadRequestError(error);
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, value, { new: true });
    if (!result) {
        throw HttpError(404, `Task ${id} not found`);
    }
    res.json(result);
};

module.exports = updateTask;
