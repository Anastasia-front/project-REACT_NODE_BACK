const { Column } = require("../../models")
const { HttpError } = require('../../helpers')

const deleteColumn = async (req, res) => {
    const { id } = req.params;
    const result = await Column.findByIdAndRemove(id);
    if (!result) {
        throw HttpError(404, `Column ${id} not found`);
    }
    res.status(204).json({ message: `Column ${id} deleted` });
};

module.exports = deleteColumn;