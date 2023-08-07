const { Column } = require("../../models")
const { columnSchemas } = require("../../schemas");
const { HttpError, BadRequestError } = require('../../helpers')

const updateColumn = async (req, res) => {
    const { value, error } = columnSchemas.addColumnSchema.validate(req.body, {
        abortEarly: false,
    });
    BadRequestError(error);
    const { id } = req.params;
    const { title } = value;
    const result = await Column.findByIdAndUpdate(id, { title }, { new: true });
    if (!result) {
        throw HttpError(404, `Column ${id} not found`);
    }
    res.status(201).json(result);
};

module.exports = updateColumn;
