const { Board, Background } = require("../../models")
const { boardSchemas } = require("../../schemas");
const { BadRequestError } = require("../../helpers");

const addBoard = async (req, res) => {
    const { value, error } = boardSchemas.addBoardSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    if (value.background) {
        const { background: title } = value;
        const { _id } = await Background.findOne({ title })
        value.background = _id;
    }
    const { _id: owner } = req.user;
    const result = await Board.create({ ...value, owner });
    res.status(201).json(result);
};

module.exports = addBoard;

