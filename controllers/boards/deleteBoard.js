const { Board } = require("../../models")
const { HttpError } = require('../../helpers')

const deleteBoard = async (req, res) => {
    const { id } = req.params;
    const result = await Board.findByIdAndRemove(id);
    if (!result) {
        throw HttpError(404, `Board ${id} not found`);
    }
    res.status(200).json({
        message: `Board ${id} deleted successfully`,
        data: result
    });
};

module.exports = deleteBoard;