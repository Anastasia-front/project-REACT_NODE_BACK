const { Column } = require("../../models")
const { HttpError } = require('../../helpers')

const updateColumn = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const result = await Column.findByIdAndUpdate(id, { title }, { new: true });
    if (!result) {
        throw HttpError(404, `Column ${id} not found`);
    }
    res.status(201).json(result);
};

module.exports = updateColumn;