const { Board } = require("../../models")
const { HttpError } = require('../../helpers')

const updateBoard = async (req, res) => {
    const { id } = req.params;
    const result = await Board.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, `Board ${id} not found`);
    }
    res.json(result);
};

module.exports = updateBoard;

