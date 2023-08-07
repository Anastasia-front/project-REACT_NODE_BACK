const { Board } = require("../../models")
const { boardSchemas } = require("../../schemas");
const { HttpError, BadRequestError } = require('../../helpers')

const updateBoard = async (req, res) => {
    const { value, error } = boardSchemas.addBoardSchema.validate(req.body, {
        abortEarly: false,
    });
    BadRequestError(error);
    const { id } = req.params;
    const result = await Board.findByIdAndUpdate(id, value, { new: true });
    if (!result) {
        throw HttpError(404, `Board ${id} not found`);
    }
    res.json(result);
};

module.exports = updateBoard;
